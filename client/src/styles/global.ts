import { createGlobalStyle } from "styled-components";
import * as themeConf from "./theme"
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



interface GS {
  theme: string;
}

const GlobalStyle = createGlobalStyle<GS>`

*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body { 
    width: 100vw;
    height: 100vh;
    background-color: 'white';
    transition: all 0.25s linear;
    overflow-x: hidden;
}

@font-face {
    font-family: 'Jost';
    src: local('Jost'), local('Jost'),
    url(${JostWoff2}) format('woff2'),
    url(${JostWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter'),
    url(${InterWoff2}) format('woff2'),
    url(${InterWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Zilla';
    src: local('Zilla'), local('Zilla'),
    url(${ZillaWoff2}) format('woff2'),
    url(${ZillaWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSans';
    src: local('NotoSans'), local('NotoSans'),
    url(${NotoSansWoff2}) format('woff2'),
    url(${NotoSansWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    src: local('Quicksand'), local('Quicksand'),
    url(${QuicksandWoff2}) format('woff2'),
    url(${QuicksandWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: local('Inconsolata'), local('Inconsolata'),
    url(${InconsolataWoff2}) format('woff2'),
    url(${InconsolataWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair';
    src: local('Playfair'), local('Playfair'),
    url(${PlayfairWoff2}) format('woff2'),
    url(${PlayfairWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  /* Swiper */

  .swiper {
    // background-color: rgba(51,51,51,0.7);
    background-color: rgb(0, 255, 127);
  }
  .swiper-slide {
    margin: 8px;
  }
  
  .swiper-button-next { 
    background-color: rgba(51,51,51,0.7);
    color: springgreen !important; 
    
     
    height: 100% !important;
    top: 22px !important;
    right: 0px !important;
    
  };
  .swiper-button-prev { 
    background-color: rgba(51,51,51,0.7);
    color: springgreen !important; 
    
     
    height: 100% !important;
    top: 22px !important;
    left: 0px !important;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #c9ffe560;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #72348e88;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: silver;
  }

  ::-webkit-file-upload-button {
   visibility: hidden;

  }

  

`;

export default GlobalStyle;
console.log(themeConf.backgroundColor);