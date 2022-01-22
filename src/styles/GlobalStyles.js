import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {  
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-right: 10%;
    margin-left: 10%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.aColor};
  }
  a:hover {
    text-decoration: underline;
  }
  .footer {
    text-align: center;
  }
  .footer > span{
    margin: 3px;
  }
  .header-navigation-links > span {
    margin: 8px;
  }
  .image {
    margin: 10px;
    width: 70%;
  }
  .clickable {
    cursor: pointer;
  }
  `