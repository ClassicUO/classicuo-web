import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { render } from 'react-dom';

// TODO: Experimental
declare const createSandboxRootDomElement: (type: string) => Element;
declare const createSandboxStyleSheet: () => any;

export const mountInterfaceRoot = (App: React.FC) => {
  const { root, Main } =
    typeof document !== 'undefined'
      ? {
          root: document.body.appendChild(document.createElement('div')),
          Main: App
        }
      : {
          root: createSandboxRootDomElement('div'),
          Main: () => (
            <StyleSheetManager sheet={createSandboxStyleSheet()}>
              <App />
            </StyleSheetManager>
          )
        };

  render(<Main />, root);
};
