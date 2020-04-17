import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import GlobalStyle from '../src/styles/global';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLarge: {
    name: 'Tablet Large',
    styles: {
      width: '1024px',
      height: '800px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1360px',
      height: '1024pxpx',
    },
  },
};

// configureViewport({
//   viewports: newViewports,
// });

const styles = {
  padding: '20px',
};
const Container = ({ children }) => <div style={styles}>{children}</div>;

addParameters({
  viewport: {
    viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});

addDecorator(story => (
  <>
    <Container>
      <GlobalStyle />
      {story()}
    </Container>
  </>
));
