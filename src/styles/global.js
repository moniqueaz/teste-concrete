import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: normal;
  src: local('Monaco'), url('Monaco.woff') format('woff');
}

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100%;
}

body{
  background-color: #fff;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  color: #000;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
}

button{
  cursor: pointer;
  border: 0;
  border-radius: 0;
}
`;
