import styled from 'styled-components';
import React, { useState } from 'react';
import { ChatTabEntry, defaultTabs, MessageFilter } from './index';

export const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding-left: 1px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.6)')};
  border: 0;
  color: white;
  cursor: pointer;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 14px;
  height: 24px;
  line-height: 16px;
  min-width: 54px;
  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const ChatTabs: React.FC<{ setActiveTab: (tab: ChatTabEntry) => void; activeTab: ChatTabEntry }> = ({
  setActiveTab,
  activeTab
}) => {
  const [tabs, setTabs] = useState<ChatTabEntry[]>(defaultTabs);

  return (
    <TabsContainer>
      {tabs.map((tab, idx) => (
        <TabButton active={tab === activeTab} key={idx} onClick={() => setActiveTab(tab)}>
          {tab.name}
        </TabButton>
      ))}
    </TabsContainer>
  );
};
