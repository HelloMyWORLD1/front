import styled from "styled-components";

//LoginPage 스타일
export const LogoImg = styled.img`
    //position: absolute;
    width: 120.85px;
    height: 72px;
    //left: 899.5px;
    //top: 80px;
    margin-left: 20px;
    margin-top: 91px;
`;
export const BlackLine = styled.div`
    //position: absolute;
    width: 300px;
    height: 0px;
    //left: 810px;
    //top: 212px;
    margin-left: 20px;
    margin-top: 60px;
    border: 1px solid #e5e5e5;
`;
export const LoginBtn = styled.button`
    position: absolute;
    width: 400px;
    height: 60px;
    left: 760px;
    top: 402px;
    background: #222222;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    text-align: center;
    letter-spacing: -0.1em;

    color: #ffffff;
`;

export const EmailInput = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 400px;
    height: 60px;
    left: 760px;
    top: 212px;

    background: #ffffff;
    border: 1px solid #333333;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    &::placeholder {
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

    background: #ffffff;
    border: 1px solid #e5e5e5;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    &::placeholder {
        line-height: 23px;
        letter-spacing: -0.1em;
        color: #333333;
    }
`;
export const PwVector = styled.img`
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

    font-family: "Noto Sans CJK KR";
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

    font-family: "Noto Sans CJK KR";
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

    font-family: "Noto Sans CJK KR";
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

export const SignUpComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Test = styled.div`
    width: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const SignUpTxt = styled.span`
    //position: absolute;
    // width: 231px;
    height: 67px;
    //left: 845px; //원본
    //top: 252px; //원본
    margin-top: 40px; //margin-top : test
    margin-left: 20px; // margin-left : test
    font-family: "Noto Sans CJK KR";
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
    //position: absolute;
    // width: 280px;
    height: 26px;
    //left: 830px; // 원본
    //top: 324px; // 원본
    margin-top: 5px; //test
    margin-left: 20px; //test
    font-family: "Noto Sans CJK KR";
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

    //position: absolute;
    width: 600px;
    height: 60px;
    //left: 660px; //원본
    //top: 390px; //원본
    margin-left: 20px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const BirthInput = styled.input`
    box-sizing: border-box;

    //position: absolute;
    width: 600px;
    height: 60px;
    //left: 660px; 원본
    //top: 511px; 원본
    margin-left: 20px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const PhoneInput = styled.input`
    box-sizing: border-box;

    //position: absolute;
    width: 600px;
    height: 60px;
    //left: 660px;
    //top: 632px;
    margin-left: 20px; //test
    margin-top: 10px; //test
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const EmailSignUpInput = styled.input`
    box-sizing: border-box;

    //position: absolute;
    width: 383px;
    height: 60px;
    //left: 660px;
    //top: 754px;
    margin-left: 20px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const EmailSignUpSelect = styled.select`
    box-sizing: border-box;

    //position: absolute; 원본
    width: 207px;
    height: 60px;
    //left: 1053px; 원본
    //top: 754px; 원본
    margin-left: 5px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
`;

export const PwSignUpInput = styled.input`
    box-sizing: border-box;

    //position: absolute; 원본
    width: 600px;
    height: 60px;
    //left: 660px; 원본
    //top: 895px; 원본
    margin-left: 20px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const PwCheckInput = styled.input`
    box-sizing: border-box;

    //position: absolute; 원본
    width: 600px;
    height: 60px;
    //left: 660px; 원본
    //top: 1009px; 원본
    margin-left: 20px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    &::placeholder {
        color: #999999;
    }
`;
export const SignUpBtn = styled.button`
    //position: absolute;
    width: 600px;
    height: 60px;
    //left: 660px;
    //top: 1140px;
    margin-left: 20px;
    margin-top: 40px;
    margin-bottom: 200px;
    background: #222222;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.1em;

    color: #ffffff;
`;
export const ExplainTxt = styled.div`
    //position: absolute;
    height: 20px;
    margin-left: 20px;
    margin-top: 40px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1em;

    color: #333333;
`;

export const NameTxt = styled.span`
    //position: absolute;
    // width: 316px;
    height: 23px;
    //left: 660px;
    //top: 458px;
    margin-left: 20px;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;
export const BirthTxt = styled.span`
    //position: absolute; 원본
    // width: 359px;
    height: 23px;
    //left: 660px; 원본
    //top: 579px; 원본
    margin-left: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;
export const PhoneTxt = styled.span`
    // position: absolute; 원본
    // width: 359px;
    height: 23px;
    //left: 660px; 원본
    //top: 700px; 원본
    margin-left: 20px;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;
export const EmailTxt = styled.span`
    //position: absolute; 원본
    // width: 359px;
    height: 23px;
    //left: 660px; 원본
    //top: 822px; 원본
    margin-left: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;
export const PwTxt = styled.span`
    //position: absolute; 원본
    // width: 301px;
    height: 23px;
    //left: 660px; 원본
    //top: 963px; 원본
    margin-left: 20px;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;
export const PwCheckTxt = styled.span`
    //position: absolute;
    // width: 179px;
    height: 23px;
    //left: 660px;
    //top: 1077px;
    margin-left: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.1em;

    color: #ff0000;
`;

//회원가입(프로필등록)
export const SignUpProfileTxt = styled.span`
    position: absolute;
    height: 67px;
    left: 863px;
    top: 252px;

    font-family: "Noto Sans CJK KR";
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

    font-family: "Noto Sans CJK KR";
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
export const Mask = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 885px;
    top: 390px;
`;
export const UploadImg = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    left: 940px;
    top: 435px;
`;
export const UploadBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    width: 78px;
    height: 60px;
    left: 921px;
    top: 435px;
`;
export const NicknameInput = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 500px;
    height: 60px;
    left: 710px;
    top: 570px;

    background: #ffffff;
    border: 1px solid #e5e5e5;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1em;
    &::placeholder {
        color: #999999;
    }
`;
export const RegisterProfileBtn = styled.button`
    position: absolute;
    width: 502px;
    height: 60px;
    left: 710px;
    top: 640px;

    background: #222222;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.1em;

    color: #ffffff;
`;
