import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Rubik', sans-serif;
        background-color: var(--light-gray);
    }

    p{
        font-size: 16px;
    }
    
    :root{
        --moderate-blue: hsl(238,40%, 52%);
        --soft-red: hsl(358, 79%, 66%);
        --light-grayish-blue: hsl(239, 57%, 85%);
        --palered: hsl(357, 100%, 86%);
        /* neutral colors  */
        --dark-blue: hsl(212, 24%, 26%);
        --grayish-blue: hsl(211, 10%, 45%);
        --light-gray: hsl(223, 19%, 93%);
        --very-light-gray: hsl(228, 33%, 97%);
        --white: hsl(0, 0%, 100%);
    }
`