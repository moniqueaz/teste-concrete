import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Default from './components/templates/Default';

function App() {
  return (
    <>
      <GlobalStyle />
      <Default>
        <Routes />
      </Default>
    </>
  );
}

export default App;
