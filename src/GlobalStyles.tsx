import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
// 아래에 전역 스타일을 추가
body {
    position: relative;
    width: 1920px;
    height: 1034px;
    background : #F5F5F5;
    
}`;
export default GlobalStyles;
