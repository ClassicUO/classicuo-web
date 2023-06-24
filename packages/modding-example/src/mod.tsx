import React from 'react';
import { Chat } from './components/Chat/Chat';
import { mountInterfaceRoot, addExtraPlayerBody, setShardRules } from '@classicuo/modding';
import { addEventListener, removeEventListener } from '@classicuo/modding';

const Main = () => (
  <>
    <Chat />
  </>
);

mountInterfaceRoot(Main);

addEventListener('webGump:WebPlayerStatusGump:update', (event) => console.log('WebPlayerStatusGump Update!', event));
