import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/styles/global';

const styles = {
  padding: '20px',
};
const Container = ({ children }) => <div style={styles}>{children}</div>;

addDecorator(story => (
  <>
    <Container>
      <GlobalStyle />
      {story()}
    </Container>
  </>
));
