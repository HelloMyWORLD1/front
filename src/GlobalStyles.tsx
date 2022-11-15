import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Font_L from "./fonts/NotoSansKR-Light.woff";
import Font_R from "./fonts/NotoSansKR-Regular.woff";
import Font_B from "./fonts/NotoSansKR-Bold.woff";

const GlobalStyles = createGlobalStyle`
${reset}
// 아래에 전역 스타일을 추가

@font-face {
  font-family: "Noto Sans CJK KR";
  src: url(${Font_L}) format('woff'); 
  font-weight: lighter;
}
@font-face {
  font-family: "Noto Sans CJK KR";
  src: url(${Font_R}) format('woff');
  font-weight: normal;
}
@font-face {
  font-family: "Noto Sans CJK KR";
  src: url(${Font_B}) format('woff');
  font-weight: bold;
}
body {
    position: relative;
    height: 1034px;
    width : 100%;
    background : #F5F5F5;
}
select {
  text-indent : 30px;
  :focus {
    outline: 1px solid #333333;
  }
}
textarea,input {
  text-indent: 20px;
  :focus {
    outline: 1px solid #333333;
  }
}
`;

export default GlobalStyles;
