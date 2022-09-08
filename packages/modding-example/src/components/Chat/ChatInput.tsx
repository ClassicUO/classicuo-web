import styled from 'styled-components';
import React from 'react';
import { client, player } from '@classicuo/modding';

const Input = styled.input`
  min-height: 32px;
  width: 90%;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  background-color: transparent;
  color: white;
  text-indent: 10px;
  border: 0;
  font-family: UOFont, sans-serif;

  &:focus {
    outline: none;
  }
`;

export const ChatInput = () => (
  <Input
    placeholder={'Type a message'}
    onKeyDown={async (ev) => {
      const target = ev.target as HTMLInputElement;
      const value = target.value;

      if (ev.key !== 'Enter' || !value) {
        return;
      }
      await client.say(value);
      target.value = '';
    }}
  />
);
