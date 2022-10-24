import styled from "styled-components";
import mid from "../img/Rectangle.png";
// 중첩 사용 스타일
export const LogoImg = styled.img<{
  width?: number;
  height?: number;
  marginTop?: number;
}>`
  //position: absolute;
  width: ${(props) => (props.width ? `${props.width}px` : "120.85px")};
  height: ${(props) => (props.height ? `${props.height}px` : "72px")};
  //left: 899.5px;
  //top: 80px;
  //margin-left: 20px;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "91px")};
  cursor: pointer;
`;
export const BlackLine = styled.div<{ marginTop?: number }>`
  //position: absolute;
  width: 300px;
  height: 0px;
  //left: 810px;
  //top: 212px;
  //margin-left: 20px;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "60px")};
  border: 1px solid #e5e5e5;
`;
export const Vector = styled.img`
  //position: absolute;
  //left: 34.38%;
  //right: 63.75%;
  //top: 2.22%;
  //bottom: 96.12%;
  position: absolute;
  margin-top: 40px;
  cursor: pointer;
  //margin-left: 20px;
`;
//LoginPage 스타일
export const LogInComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogInInsideBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginBtn = styled.button`
  //position: absolute;
  width: 400px;
  height: 60px;
  //left: 760px;
  //top: 402px;
  //margin-left: 20px;
  margin-top: 15px;
  background: #222222;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.1em;

  color: #ffffff;
`;

export const EmailInput = styled.input`
  box-sizing: border-box;

  //position: absolute;
  width: 400px;
  height: 60px;
  //left: 760px;
  //top: 212px;
  //margin-left: 20px;
  margin-top: 60px;
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

  //position: absolute;
  width: 400px;
  height: 60px;
  //left: 760px;
  //top: 282px;
  //margin-left: 20px;
  margin-top: 10px;
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

export const TagBox = styled.div`
  margin-top: 15px;
`;
export const SignupTag = styled.a`
  text-decoration: none;

  //position: absolute;
  height: 23px;
  //left: 760px;
  //top: 477px;
  //margin-left: 20px;

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
  //position: absolute;
  height: 23px;
  //left: 1032px;
  //top: 477px;
  margin-left: 216px;
  margin-top: 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;

  color: #333333;
`;

export const AutoLoginTxt = styled.span`
  //position: absolute;

  height: 23px;
  //left: 798px;
  //top: 360px;
  margin-left: 9.25px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: -0.1em;

  color: #999999;
`;

export const AutoLoginImg = styled.img`
  //position: absolute;
  width: 30px;
  height: 30px;
  //left: 760px;
  //top: 357px;
  //margin-left: 20px;
  margin-top: 16.25px;
`;

// 회원가입페이지

export const SignUpComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpInsideBox = styled.div`
  width: 600px;
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
  //margin-left: 20px; // margin-left : test
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
  //margin-left: 20px; //test
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
  //margin-left: 20px;
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
  //margin-left: 20px;
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
  //margin-left: 20px; //test
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
  //margin-left: 20px;
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
  //margin-left: 20px;
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
  //margin-left: 20px;
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
  //margin-left: 20px;
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
  //margin-left: 20px;
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
  //margin-left: 20px;

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
  //margin-left: 20px;
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
  //margin-left: 20px;

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
  //margin-left: 20px;
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
  //margin-left: 20px;

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
  //margin-left: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;

  color: #ff0000;
`;

//회원가입(프로필등록)
export const SignUpProfileComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpProfileBox = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignUpProfileTxt = styled.span`
  //position: absolute;
  height: 67px;
  //left: 863px;
  //top: 252px;
  //margin-left: 20px;
  margin-top: 40px;
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
  //position: absolute;
  height: 26px;

  //left: 838px;
  //top: 324px;
  //margin-left: 20px;
  margin-top: 5px;
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
export const MaskBox = styled.div`
  position: relative;
`;
export const Mask = styled.img`
  width: 150px;
  height: 150px;
  //left: 885px;
  //top: 390px;
  margin-left: 187px;
  margin-top: 40px;
`;
export const UploadImg = styled.img`
  position: absolute;

  width: 40px;
  height: 40px;
  //left: 940px;
  //top: 435px;

  top: 50%;
  left: 45%;

  cursor: pointer;
`;

export const NicknameInput = styled.input`
  box-sizing: border-box;

  //position: absolute;
  width: 500px;
  height: 60px;
  //left: 710px;
  //top: 570px;
  //margin-left: 20px;
  margin-top: 30px;
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
  //position: absolute;
  width: 502px;
  height: 60px;
  //left: 710px;
  //top: 640px;
  margin-top: 40px;
  //margin-left: 20px;
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

//비밀번호 찾기 페이지
export const FindPasswordComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FindPasswordOutSideBox = styled.div`
  width: 600px;
`;
export const FindPasswordInsideBox = styled.div`
  width: 600px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FindPasswordTxt = styled.span`
  //position: absolute;
  width: 124px;
  height: 35px;
  //left: 1048px;
  //top: 205px;
  margin-top: 53px;
  //margin-left: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;

  color: #333333;
`;

export const FindPasswordInput = styled.input`
  box-sizing: border-box;

  //position: absolute;
  width: 600px;
  height: 60px;
  //left: 660px;
  //top: 312px;
  &::placeholder {
    color: #999999;
  }
  margin-top: 40px;
  background: #ffffff;
  border: 1px solid #333333;
`;

export const FindPasswordSubmitButton = styled.button`
  box-sizing: border-box;

  //position: absolute;
  width: 600px;
  height: 60px;
  //left: 660px;
  //top: 412px;
  margin-top: 40px;
  background: #222222;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.1em;

  color: #ffffff;
`;

//Header

export const HeaderComponent = styled.div`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchImg = styled.img`
  margin-left: 60px;
  margin-right: 30px;
  cursor: pointer;
`;

export const LinkCategory = styled.div`
  display: flex;
  padding-top: 5px;
`;
//홈 | 소개 | 커뮤니티 개별 카드
export const LinkCategoryCard = styled.div`
  height: 20px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  //line-height: 62px;
  /* or 388% */
  margin-right: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;

  color: #333333;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const MakeMyBlogBtn = styled.button`
  width: 176px;
  height: 80px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;

  color: #ffffff;
`;

//HomePage

export const HomePageMidComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const HomePageMidImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const HomePageMidTxt1 = styled.div`
  position: absolute;
  width: 356px;
  height: 124px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 62px;
  /* or 135% */

  text-align: center;
  letter-spacing: -0.1em;

  color: #ffffff;
`;
export const HomePageMidTxt2 = styled.div`
  position: absolute;
  width: 291px;
  height: 20px;
  //left: 815px;
  //top: 630px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 62px;

  /* or 310% */

  //display: flex;
  //align-items: center;
  text-align: center;
  letter-spacing: -0.1em;

  color: #eeeeee;
`;

export const HomeCardIntroTxtComponent = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  //position: absolute;
  width: 94%;
  height: 64px;

  margin-top: 80px;
`;
export const HomeCardIntroTxt1 = styled.div`
  width: 220px;
  height: 36px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  letter-spacing: -0.1em;

  color: #333333;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const HomeCardIntroTxt2 = styled.div`
  width: 284px;
  height: 18px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 62px;
  /* or 388% */

  display: flex;
  align-items: center;
  letter-spacing: -0.1em;

  color: #999999;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RedCircle = styled.img`
  width: 7px;
  height: 7px;
  margin-left: 2px;
  margin-bottom: 37px;
`;
export const HomePageUnderComponent = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FilterComponent = styled.div`
  margin-top: 30px;
  height: 36px;
  width: 94%;
  display: flex;
  justify-content: space-between;
`;
export const FilterCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  padding: 0px;
`;

export const FilterEachCategory = styled.div`
  height: 36px;

  margin-right: 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  letter-spacing: -0.1em;
  cursor: pointer;
  color: #999999;
`;
export const FilterTxt = styled.div`
  //position: absolute;
  width: 32px;
  height: 36px;
  //left: 1829px;
  //top: 1234px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  letter-spacing: -0.1em;

  color: #999999;
`;

export const FilterResultCardComponent = styled.div`
  width: 96%;

  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;
export const FilterResultCard = styled.div`
  width: 23%;
  height: 320px;
  margin: 1%;
  background-color: black;
  color: black;
`;
