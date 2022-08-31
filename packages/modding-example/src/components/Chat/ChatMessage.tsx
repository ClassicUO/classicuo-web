import styled from 'styled-components';

const hueToRgb = ({ hue }: { hue: number }) => {
  const scale = 5.0;
  const b = Math.min(255, ((hue >> 24) & 0xff) * scale);
  const g = Math.min(255, ((hue >> 16) & 0xff) * scale);
  const r = Math.min(255, ((hue >> 8) & 0xff) * scale);
  const a = hue & 0xff;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const ChatMessage = styled.span<{ hue: number }>`
  margin: 0;
  font-size: 12px;
  color: ${({ hue }) => hueToRgb({ hue })};
  max-width: 100%;
  overflow-wrap: anywhere;
  padding-left: 8px;
  padding-top: 2px;
  font-family: UOFont, sans-serif;
  line-height: 1.5rem;
`;
