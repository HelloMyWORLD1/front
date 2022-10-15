import styled from "styled-components";


//LoginPage 스타일
export const LogoImg = styled.img`
  position: absolute;
  width: 120.85px;
  height: 72px;
  left: 899.5px;
  top: 80px;
`;
export const LoginBtn = styled.button`
position: absolute;
width: 400px;
height: 60px;
left: 760px;
top: 402px;
background: #222222;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;

text-align: center;
letter-spacing: -0.1em;

color: #FFFFFF; 
`;

export const EmailInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 400px;
height: 60px;
left: 760px;
top: 212px;

background: #FFFFFF;
border: 1px solid #333333;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;
&::placeholder{
  color: #333333;
  
}

`;
export const PwInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 400px;
height: 60px;
left: 760px;
top: 282px;

background: #FFFFFF;
border: 1px solid #E5E5E5;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;
&::placeholder {
  
  color: #333333;
}
`;
export const PwVector  = styled.img`
position: absolute;
left: 58.33%;
right: 40.57%;
top: 29.59%;
bottom: 69.25%;
background: #999999;
opacity: 0.3;
`;

export const SignupTag = styled.a`
text-decoration: none;

position: absolute;
width: 55px;
height: 23px;
left: 760px;
top: 477px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #333333;
`;
export const FingTag = styled.a`
text-decoration: none;

position: absolute;
width: 129px;
height: 23px;
left: 1032px;
top: 477px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #333333;
`;

export const AutoLoginTxt = styled.span`
position: absolute;
width: 70px;
height: 23px;
left: 798px;
top: 360px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #999999;
`;

export const AutoLoginImg = styled.img`
position: absolute;
width: 30px;
height: 30px;
left: 760px;
top: 357px;
`;

// 회원가입페이지
export const SignUpTxt = styled.span`
position: absolute;
width: 231px;
height: 67px;
left: 845px;
top: 252px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 46px;
line-height: 67px;
/* identical to box height */
display: flex;
align-items: center;
letter-spacing: -0.1em;
text-transform: uppercase;

color: #333333;
`;
export const SignUpTxt2 = styled.span`
position: absolute;
width: 280px;
height: 26px;
left: 830px;
top: 324px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
/* identical to box height */
display: flex;
align-items: center;
letter-spacing: -0.1em;
text-transform: uppercase;

color: #999999;
`;