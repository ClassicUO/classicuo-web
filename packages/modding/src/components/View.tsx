import { CSSProperties, PropsWithChildren, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { pointer } from './Cursors';

export enum DraggingState {
  undefined = -1,
  starts = 0,
  moves = 1,
  finished = 2
}

export function useDragging() {
  const [state, setState] = useState(DraggingState.undefined);
  const [elementOffset, setElementOffset] = useState({ x: 0, y: 0 }); // offset of element in relation to it's parent
  const [touchOffset, setTouchOffset] = useState({ x: 0, y: 0 }); // offset of mouse down point in relation to the element
  const ref = useRef() as RefObject<HTMLDivElement>;

  // shows active state of dragging
  const isDragging = () => {
    return state === DraggingState.starts || state === DraggingState.moves;
  };

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      const parentElement = ref.current?.offsetParent as HTMLElement;
      if (e.button !== 0 || !ref.current || !parentElement || (e.target as HTMLElement).nodeName !== 'DIV') return;

      setElementOffset({
        x: ref.current.offsetLeft,
        y: ref.current.offsetTop
      });
      setTouchOffset({
        x: e.x - parentElement.offsetLeft - ref.current.offsetLeft,
        y: e.y - parentElement.offsetTop - ref.current.offsetTop
      });

      setState(DraggingState.starts);
    },
    [ref.current, state]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const parentElement = ref.current?.offsetParent as HTMLElement;
      if (!isDragging() || !ref.current || !parentElement) return;

      setState(DraggingState.moves);
      setElementOffset({
        x: e.x - touchOffset.x - parentElement.offsetLeft,
        y: e.y - touchOffset.y - parentElement.offsetTop
      });
    },
    [ref.current, state]
  );

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      // ends up the flow by setting the state
      setState(DraggingState.finished);
    },
    [ref.current, state]
  );

  // When the element mounts, attach a mousedown listener
  useEffect(() => {
    const element = ref.current;
    element?.addEventListener('mousedown', onMouseDown);

    return () => {
      element?.removeEventListener('mousedown', onMouseDown);
    };
  }, [ref.current, state]);

  // Everytime the state changes, assign or remove
  // the corresponding mousemove, mouseup and click handlers
  useEffect(() => {
    if (isDragging()) {
      ref.current?.addEventListener('mouseup', onMouseUp);
      ref.current?.ownerDocument.addEventListener('mousemove', onMouseMove);
    } else {
      ref.current?.removeEventListener('mouseup', onMouseUp);
      ref.current?.ownerDocument.removeEventListener('mousemove', onMouseMove);
    }
    return () => {
      ref.current?.removeEventListener('mouseup', onMouseUp);
      ref.current?.ownerDocument.removeEventListener('mousemove', onMouseMove);
    };
  }, [ref.current, state]);

  return {
    ref,
    state,
    elementOffset,
    touchOffset
  };
}

const Container = styled.div<{ width: number; height: number; resizeable: boolean }>`
  overflow: auto;

  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  resize: ${({ resizeable }) => (resizeable ? 'both' : 'none')};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const View: React.FC<
  PropsWithChildren<{
    width: number;
    height: number;
    resizeable: boolean;
    draggable: boolean;
    initialPosition?: { x: number; y: number };
    cursors?: {
      dragging?: string;
      draggable?: string;
      pointer?: string;
    };
  }>
> = ({ cursors, draggable, initialPosition, children, ...props }) => {
  const dragging = useDragging();
  const containerRef = useRef<HTMLDivElement>(null);

  const cursor =
    (draggable
      ? dragging.state === DraggingState.moves
        ? cursors?.dragging
        : cursors?.draggable
      : cursors?.pointer) || pointer;

  const style: CSSProperties = {
    position: 'absolute',
    left: dragging.ref.current ? dragging.elementOffset.x : initialPosition?.x || 0,
    top: dragging.ref.current ? dragging.elementOffset.y : initialPosition?.y || 0,
    cursor
  };

  return (
    <div
      onMouseDownCapture={(e) => {
        // Prevent dragging while the container is resizing
        if (e.target === containerRef.current) {
          e.stopPropagation();
        }
      }}
    >
      <div ref={draggable ? dragging.ref : undefined} style={style}>
        <Container
          {...props}
          ref={containerRef}
          onMouseDownCapture={(e) => {
            // Prevent dragging while the container is resizing
            if (e.target === containerRef.current) {
              e.stopPropagation();
            }
          }}
        >
          {children}
        </Container>
      </div>
    </div>
  );
};
