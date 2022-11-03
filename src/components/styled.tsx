import styled from "styled-components";
import mid from "../img/Rectangle.png";
// 중첩 사용 스타일
export const LogoImg = styled.img<{
  width?: number;
  height?: number;
  marginTop?: number;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "120.85px")};
  height: ${(props) => (props.height ? `${props.height}px` : "72px")};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "91px")};
  cursor: pointer;
`;
export const BlackLine = styled.div<{ marginTop?: number }>`
  width: 300px;
  height: 0px;
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
  width: 400px;
  height: 60px;
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
  width: 400px;
  height: 60px;
  margin-top: 60px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
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
  width: 400px;
  height: 60px;
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
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
export const SignupTag = styled.a`
  text-decoration: none;
  height: 23px;
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
  height: 23px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  color: #333333;
`;

export const AutoLoginTxt = styled.span`
  height: 23px;
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
  width: 30px;
  height: 30px;
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
  height: 67px;
  margin-top: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 67px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #333333;
`;
export const SignUpTxt2 = styled.span`
  height: 26px;
  margin-top: 5px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #999999;
`;
export const SignUpNormalInput = styled.input`
  box-sizing: border-box;
  width: 600px;
  height: 60px;
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
export const FieldSignUpSelect = styled.select`
  box-sizing: border-box;
  width: 600px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
`;
export const EmailSignUpInput = styled.input`
  box-sizing: border-box;
  width: 383px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  padding-top: 0;
  &::placeholder {
    color: #999999;
  }
`;
export const EmailSignUpSelect = styled.select`
  box-sizing: border-box;
  width: 207px;
  height: 60px;
  margin-left: 5px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
`;

export const SignUpBtn = styled.button`
  width: 600px;
  height: 60px;
  margin-top: 40px;
  margin-bottom: 200px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.1em;

  color: #ffffff;
`;
export const ExplainTxt = styled.div`
  height: 20px;
  margin-top: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1em;

  color: #333333;
`;

export const CheckWarnTxt = styled.span`
  height: 23px;
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
  height: 67px;
  margin-top: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 67px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #333333;
`;
export const SignUpProfileTxt2 = styled.span`
  height: 26px;
  margin-top: 5px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
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
  margin-left: 187px;
  margin-top: 40px;
`;
export const UploadImg = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 45%;
  cursor: pointer;
`;

export const NicknameInput = styled.input`
  box-sizing: border-box;
  width: 500px;
  height: 60px;
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
  width: 502px;
  height: 60px;
  margin-top: 40px;
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
  width: 124px;
  height: 35px;
  margin-top: 53px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #333333;
`;

export const FindPasswordInput = styled.input`
  box-sizing: border-box;
  width: 600px;
  height: 60px;
  &::placeholder {
    color: #999999;
  }
  margin-top: 40px;
  background: #ffffff;
  border: 1px solid #333333;
`;

export const FindPasswordSubmitButton = styled.button`
  box-sizing: border-box;
  width: 600px;
  height: 60px;
  margin-top: 40px;
  background: #222222;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
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
  margin-right: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;
  color: #333333;
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
  height: 20px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 62px;
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
  width: 94%;
  height: 64px;

  margin-top: 80px;
`;
export const HomeCardIntroTxt1 = styled.div`
  height: 36px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const HomeCardIntroTxt2 = styled.div`
  height: 18px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 62px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  color: #999999;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RedCircle = styled.img`
  width: 7px;
  height: 7px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const HomePageUnderComponent = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
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
  letter-spacing: -0.1em;
  cursor: pointer;
  color: #999999;
`;
export const FilterTxt = styled.div`
  height: 36px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  height: 40%;
  margin: 1%;
  background: #ffffff;
  color: black;
  text-align: center;
`;

//홈카드
export const CardImg = styled.img`
  margin-top: 60px;
  width: 150px;
  height: 150px;
  border-radius: 190px;
  background: #eeeeee;
`;
export const NicknameTxt = styled.div`
  height: 27px;
  margin-top: 19px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.1em;
  color: #333333;
`;
export const FieldTxt = styled.div`
  height: 27px;
  font-family: "Noto Sans CJK KR";
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1em;
  color: #999999;
`;
export const FollowTxt = styled.div`
  height: 27px;
  margin-top: 15px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: -0.1em;
  color: #cccccc;
`;
export const BlogTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  margin-top: 15px;
  width: 206px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1em;
  margin-bottom: 60px;
  color: #999999;
`;

//푸터
export const FooterComponent = styled.div`
  bottom: 0;
  left: 0px;
  height: 300px;
  background: #000000;
  display: flex;
  justify-content: space-between;
`;
export const FooterWrapper = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  height: 300px;
  background: #000000;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Footertxt1 = styled.div`
  width: 621px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.1em;
  color: #666666;
`;
export const FooterLine = styled.div`
  height: 0px;
  border: 1px solid #333333;
`;
export const FooterTxt2 = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: -0.1em;
  color: #666666;
`;
export const FooterWrapper2 = styled.div`
  margin-top: 50px;
  margin-right: 60px;
  display: flex;
  gap: 20px;
`;
export const FooterTxt3 = styled.div`
  height: 14px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: -0.1em;
  color: #ffffff;
`;
