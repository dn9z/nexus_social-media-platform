var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { createGlobalStyle } from "styled-components";
import * as themeConf from "./theme";
import JostWoff from "./fonts/Jost.woff";
import JostWoff2 from "./fonts/Jost.woff2";
import InterWoff from "./fonts/Inter-VariableFont_slnt,wght.woff";
import InterWoff2 from "./fonts/Inter-VariableFont_slnt,wght.woff2";
import ZillaWoff from "./fonts/ZillaSlab-Regular.woff";
import ZillaWoff2 from "./fonts/ZillaSlab-Regular.woff2";
import NotoSansWoff from "./fonts/NotoSans-Regular.woff";
import NotoSansWoff2 from "./fonts/NotoSans-Regular.woff2";
import QuicksandWoff from "./fonts/Quicksand-VariableFont_wght.woff";
import QuicksandWoff2 from "./fonts/Quicksand-VariableFont_wght.woff2";
import InconsolataWoff from "./fonts/Inconsolata-VariableFont_wdth,wght.woff";
import InconsolataWoff2 from "./fonts/Inconsolata-VariableFont_wdth,wght.woff2";
import PlayfairWoff from "./fonts/PlayfairDisplay-VariableFont_wght.woff";
import PlayfairWoff2 from "./fonts/PlayfairDisplay-VariableFont_wght.woff2";
var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody { \n    width: 100vw;\n    height: 100vh;\n    background-color: 'white';\n    transition: all 0.25s linear;\n    overflow-x: hidden;\n}\n\n@font-face {\n    font-family: 'Jost';\n    src: local('Jost'), local('Jost'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'Inter';\n    src: local('Inter'), local('Inter'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'Zilla';\n    src: local('Zilla'), local('Zilla'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'NotoSans';\n    src: local('NotoSans'), local('NotoSans'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Quicksand';\n    src: local('Quicksand'), local('Quicksand'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Inconsolata';\n    src: local('Inconsolata'), local('Inconsolata'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Playfair';\n    src: local('Playfair'), local('Playfair'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  /* Swiper */\n\n  .swiper {\n    // background-color: rgba(51,51,51,0.7);\n    background-color: rgb(0, 255, 127);\n  }\n  .swiper-slide {\n    margin: 8px;\n  }\n  \n  .swiper-button-next { \n    background-color: rgba(51,51,51,0.7);\n    color: springgreen !important; \n    \n     \n    height: 100% !important;\n    top: 22px !important;\n    right: 0px !important;\n    \n  };\n  .swiper-button-prev { \n    background-color: rgba(51,51,51,0.7);\n    color: springgreen !important; \n    \n     \n    height: 100% !important;\n    top: 22px !important;\n    left: 0px !important;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #c9ffe560;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #72348e88;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: silver;\n  }\n\n  ::-webkit-file-upload-button {\n   visibility: hidden;\n\n  }\n\n  \n\n"], ["\n\n*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody { \n    width: 100vw;\n    height: 100vh;\n    background-color: 'white';\n    transition: all 0.25s linear;\n    overflow-x: hidden;\n}\n\n@font-face {\n    font-family: 'Jost';\n    src: local('Jost'), local('Jost'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'Inter';\n    src: local('Inter'), local('Inter'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'Zilla';\n    src: local('Zilla'), local('Zilla'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'NotoSans';\n    src: local('NotoSans'), local('NotoSans'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Quicksand';\n    src: local('Quicksand'), local('Quicksand'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Inconsolata';\n    src: local('Inconsolata'), local('Inconsolata'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Playfair';\n    src: local('Playfair'), local('Playfair'),\n    url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  /* Swiper */\n\n  .swiper {\n    // background-color: rgba(51,51,51,0.7);\n    background-color: rgb(0, 255, 127);\n  }\n  .swiper-slide {\n    margin: 8px;\n  }\n  \n  .swiper-button-next { \n    background-color: rgba(51,51,51,0.7);\n    color: springgreen !important; \n    \n     \n    height: 100% !important;\n    top: 22px !important;\n    right: 0px !important;\n    \n  };\n  .swiper-button-prev { \n    background-color: rgba(51,51,51,0.7);\n    color: springgreen !important; \n    \n     \n    height: 100% !important;\n    top: 22px !important;\n    left: 0px !important;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #c9ffe560;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #72348e88;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: silver;\n  }\n\n  ::-webkit-file-upload-button {\n   visibility: hidden;\n\n  }\n\n  \n\n"])), JostWoff2, JostWoff, InterWoff2, InterWoff, ZillaWoff2, ZillaWoff, NotoSansWoff2, NotoSansWoff, QuicksandWoff2, QuicksandWoff, InconsolataWoff2, InconsolataWoff, PlayfairWoff2, PlayfairWoff);
export default GlobalStyle;
console.log(themeConf.backgroundColor);
var templateObject_1;
