import { createGlobalStyle } from 'styled-components'

interface GS {
    theme: string
}


const GlobalStyle = createGlobalStyle<GS>`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body { 
    width: 100vw;
    height: 100vh;
    background-color: 'white';
    transition: all 0.25s linear;
}


`

export default GlobalStyle

