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

&::placeholder{
  color: #333333;
  line-height: 23px;
  letter-spacing: -0.1em;
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

&::placeholder {
  line-height: 23px;
  letter-spacing: -0.1em;
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
// width: 231px;
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
// width: 280px;
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
export const NameInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 390px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const BirthInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 511px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const PhoneInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 632px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const EmailSignUpInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 383px;
height: 60px;
left: 660px;
top: 754px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const EmailSignUpSelect = styled.select`
box-sizing: border-box;

position: absolute;
width: 207px;
height: 60px;
left: 1053px;
top: 754px;

background: #FFFFFF;
border: 1px solid #E5E5E5;`;

export const PwSignUpInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 895px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const PwCheckInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 1009px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

&::placeholder{
  color: #999999;
}
`;
export const SignUpBtn = styled.button`

position: absolute;
width: 600px;
height: 60px;
left: 660px;
top: 1140px;

background: #222222;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 26px;
/* identical to box height */

text-align: center;
letter-spacing: -0.1em;

color: #FFFFFF;
`;
export const NameTxt = styled.span`
position: absolute;
// width: 316px;
height: 23px;
left: 660px;
top: 458px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;`;
export const BirthTxt = styled.span`
position: absolute;
// width: 359px;
height: 23px;
left: 660px;
top: 579px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;`;
export const PhoneTxt = styled.span`
position: absolute;
// width: 359px;
height: 23px;
left: 660px;
top: 700px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;
`;
export const EmailTxt = styled.span`
position: absolute;
// width: 359px;
height: 23px;
left: 660px;
top: 822px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;
`;
export const PwTxt = styled.span`
position: absolute;
// width: 301px;
height: 23px;
left: 660px;
top: 963px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;
`;
export const PwCheckTxt = styled.span`
position: absolute;
// width: 179px;
height: 23px;
left: 660px;
top: 1077px;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.1em;

color: #FF0000;`;

//회원가입(프로필등록)
export const SignUpProfileTxt = styled.span`
position: absolute;
height: 67px;
left: 863px;
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
export const SignUpProfileTxt2 = styled.span`

position: absolute;
height: 26px;
left: 838px;
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
export const Mask = styled.img``;
export const UploadImg = styled.img`
// position: absolute;
// width: 40px;
// height: 40px;
// left: 940px;
// top: 435px;
`;
export const UploadBtn = styled.button`
// position: absolute;
// width: 78px;
// height: 60px;
// left: 921px;
// top: 435px;
`;


