import React from 'react';
import { Chat } from './components/Chat/Chat';
import { mountInterfaceRoot, setProfileOptionAllowed, addExtraPlayerBody, setShardRules } from '@classicuo/modding';
import { addEventListener, removeEventListener } from '@classicuo/modding';

mountInterfaceRoot(Chat);

// for (let i = 0; i < 100; i++) {
//   addExtraPlayerBody(1900 + i, 51900 + i, i < 50 ? 400 : 401, i < 50, 1, true);
// }

setProfileOptionAllowed('Light level', false);
setProfileOptionAllowed('Hide roof tiles', false);
setProfileOptionAllowed('Hide vegetation', false);
setProfileOptionAllowed('Trees to stumps', false);
setProfileOptionAllowed('Enable Death Screen', false);
setProfileOptionAllowed('Black & White mode for dead player', false);

setShardRules({
  scripting: 'disabled',
  agents: 'disabled'
});

addEventListener('gumpUpdate', (event) => console.log('Gump Update!', event));
