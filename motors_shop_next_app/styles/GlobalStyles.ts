import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6F0;
        --brand4: #EDEAFD;

        --grey0: #0B0D0D;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        --alert1: #CD2B31;
        --alert2: #FDD8D8;
        --alert3: #FFE5E5;
        
        --success1: #18794E;
        --success2: #CCEBD7;
        --success3: #DDF3E4;

        --random1: #E34D8C;
        --random2:#C04277;
        --random3: #7D2A4D;
        --random4: #7000FF;
        --random5: #6200E3;
        --random6: #36007D;
        --random7: #349974;
        --random8: #2A7D5F;
        --random9: #153D2E;
        --random10: #6100FF;
        --random11: #5700E3;
        --random12: #30007D; 
        
        --Heading-1-700: 700 44px/56px 'Lexend', sans-serif;
        --Heading-2-600: 600 36px/45px 'Lexend', sans-serif;
        --Heading-3-600: 600 32px/40px 'Lexend', sans-serif;
        --Heading-3-500: 500 32px/40px 'Lexend', sans-serif;
        --Heading-4-600: 600 28px/35px 'Lexend', sans-serif;
        --Heading-4-500: 500 28px/35px 'Lexend', sans-serif;
        --Heading-5-600: 600 24px/30px 'Lexend', sans-serif;
        --Heading-5-500: 500 24px/30px 'Lexend', sans-serif;
        --Heading-6-600: 600 20px/25px 'Lexend', sans-serif;
        --Heading-6-500: 500 20px/25px 'Lexend', sans-serif;
        --Heading-7-600: 600 16px/20px 'Lexend', sans-serif;
        --Heading-7-500: 500 16px/20px 'Lexend', sans-serif;

        --body-1-400: 400 16px/28px 'Inter', sans-serif;
        --body-1-600: 600 16px/28px 'Inter', sans-serif;
        --body-2-400: 400 14px/24px 'Inter', sans-serif;
        --body-2-500: 500 14px/24px 'Inter', sans-serif;

        --button-big-text: 600 16px 'Inter', sans-serif;
        --button-medium-text: 600 14px 'Inter', sans-serif;

        --input-placeholder: 400 16px 'Inter', sans-serif;
        --input-label: 500 14px/16.94px 'Inter', sans-serif;
    }


    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul, li {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    -webkit-tap-highlight-color: transparent;

    a:-webkit-any-link {
        color: none;
        text-decoration: none;
    }

    html {
    scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    main {
        margin-top: 80px;
    }

     --font: Inter;
    --title: bold 21px;
    --headline: 12px;
    --headline-bold: bold 12px;
    --headline-italic: italic 12px;
    --border-radius: 4px;

`;
