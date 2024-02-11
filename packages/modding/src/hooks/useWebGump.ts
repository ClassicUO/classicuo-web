import { useEffect, useState } from 'react';
import { GumpCloseEvent, GumpIdentity, GumpUpdateEvent } from '../api/events';
import { addEventListener, removeEventListener, sendWebGumpResponse, closeWebGump } from '../index';

export interface GumpUpdateEventWithData<T = any> extends GumpUpdateEvent {
  data: T | Error;
}

type WebGumpContext<T = any> =
  | {
      closed: true;
    }
  | {
      closed: false;
      identity: GumpIdentity;
      data: T | Error;
    };

export const useWebGump = <T = any>(type: string, onUpdate?: (event: GumpUpdateEventWithData<T>) => void) => {
  const [context, setContext] = useState<WebGumpContext<T>>({
    closed: true
  });

  useEffect(() => {
    setContext(() => ({
      closed: true
    }));

    const updateListener = (event: GumpUpdateEvent) => {
      let data: T | Error;
      try {
        data = JSON.parse(event.json);
      } catch (e) {
        data = e as Error;
      }

      setContext((prev) => ({
        ...prev,
        closed: false,
        data,
        identity: {
          serial: event.serial,
          serverId: event.serverId
        }
      }));

      onUpdate?.({ ...event, data });
    };

    const closeListener = () => {
      setContext(() => ({ closed: true }));
    };

    const updateListenerId = addEventListener(`webGump:${type}:update`, updateListener);
    const closeListenerId = addEventListener(`webGump:${type}:close`, closeListener);

    return () => {
      removeEventListener(updateListenerId);
      removeEventListener(closeListenerId);
    };
  }, [type]);

  return {
    ...context,
    send: (data: string | Object) => {
      if (!context.closed) {
        sendWebGumpResponse(context.identity.serial, context.identity.serverId, data);
      }
    },
    close: () => {
      if (!context.closed) {
        closeWebGump(context.identity.serial, context.identity.serverId);
        setContext(() => ({ closed: true }));
      }
    }
  };
};
