import React, { useState } from 'react';
import { View, cursors } from '@classicuo/modding';
import { ChatContainer } from './ChatContainer';
import { ChatInput } from './ChatInput';
import { ChatArea } from './ChatArea';
import { ChatTabs } from './ChatTabs';
import { ChatTabEntry, defaultTabs } from './index';

export const Chat: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ChatTabEntry>(defaultTabs[0]);

  return (
    <View
      cursors={cursors}
      width={500}
      height={300}
      draggable={true}
      resizeable={true}
      initialPosition={{ x: 500, y: 200 }}
    >
      <ChatContainer>
        <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ChatArea messageFilter={activeTab.filter} />
        <ChatInput />
      </ChatContainer>
    </View>
  );
};
