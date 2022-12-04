import styled from 'styled-components';
import { ChatMessage } from './ChatMessage';
import { formatMessage, JournalEntry, MessageFilter } from './index';
import React, { useEffect, useState } from 'react';
import { addEventListener, removeEventListener } from '@classicuo/modding';

export const Area = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  overflow-y: auto;
  border-bottom: 1px solid darkgray;
  padding-bottom: 8px;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #060606;
  }
`;

export const ChatArea: React.FC<{ messageFilter: MessageFilter; limit?: number }> = ({
  messageFilter,
  limit = 100
}) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const id = addEventListener('journalEntry', (ev: JournalEntry) => {
      setEntries((prevEntries) => [ev, ...prevEntries]);
    });

    return () => {
      removeEventListener(id);
    };
  }, []);

  return (
    <Area>
      {entries
        .filter(messageFilter)
        .map((m, idx) => (
          <ChatMessage hue={m.hueArgb} key={idx}>
            {formatMessage(m)}
          </ChatMessage>
        ))
        .slice(0, limit)}
    </Area>
  );
};
