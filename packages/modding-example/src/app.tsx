import React from 'react';
import { Chat } from './components/Chat/Chat';
import { mountInterfaceRoot } from '@classicuo/modding';

declare const addExtraPlayerBody: (
  graphicId: number,
  gumpArtId: number,
  animId: number,
  isFemale: boolean,
  race: number,
  copyEquipConv?: boolean
) => void;

mountInterfaceRoot(Chat);

for (let i = 0; i < 100; i++) {
  addExtraPlayerBody(1900 + i, 51900 + i, i < 50 ? 400 : 401, i < 50, 1, true);
}