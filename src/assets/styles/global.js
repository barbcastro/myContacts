import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'sora', sans-serif;

  }

  body {
    background: ${({ theme }) => theme.colors.backgroud};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]} ;
  }

  button {
    cursor: pointer;
  }
`;
