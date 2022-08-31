import styled from 'styled-components';
import React from 'react';

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
    onKeyDown={(e) => {
      const value = e.currentTarget.value;
      if (e.key !== 'Enter' || !value) {
        return;
      }

      // TODO: Experimental
      (globalThis as any).sendSayMessage(value);
      e.currentTarget.value = '';
    }}
  />
);
