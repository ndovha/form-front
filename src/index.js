import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
h6, p, blockquote, pre,a, abbr, acronym, address, big,
cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
dd, ol, ul, li,fieldset, form, label, legend,table, caption,
tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
embed, figure, figcaption, footer, header, hgroup, menu, nav,
output, ruby, section, summary,time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 vertical-align: baseline;
}
 html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

img {
  max-width: 100%;
}

img,fieldset, a img {
  border: none;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
}
input[type="submit"],
button {
  cursor: pointer;
  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
}
textarea {
  overflow: auto;
}
input, button {
  margin: 0;
  padding: 0;
  border: 0;
}
div, input, textarea, select,button,
h1,h2,h3,h4,h5,h6,a,span,a:focus {
  outline: none;
}
ul,ol {
  list-style-type: none;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
html {
    box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

`

ReactDOM.render(
  <React.StrictMode>
      <Global/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
