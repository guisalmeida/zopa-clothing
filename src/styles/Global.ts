import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root {
    --sub-color: grey;
    --main-color: black;
    --dark: #212529;
    --grey: #a7a7a7;
    --light-grey: #f9f9f9;
    --white: #fff;
    --red: #cf3838;
    
    --break-small: 320px;
    --break-medium: 992px;
    --break-large: 1280px;
}

*,
:after,
:before {
    box-sizing: border-box;
}

body,
body button,
body input,
html,
html button,
html input {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 10px;
    font-weight: 400;
}

body {
    background-color:var(--light-grey);
    color:var(--dark);
    font-family: Noto Sans SC, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100%;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

button {
    outline: none;
    border: none;
    background-color: transparent;
}

.container {
    width: 100%;
    max-width: var(--break-large);
}
`
export default GlobalStyles;