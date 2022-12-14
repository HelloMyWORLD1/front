import styled, { keyframes } from "styled-components";
import mid from "../img/Rectangle.png";
import { ReactComponent as MySvg } from "../img/Vector-2.svg";
import ReactQuill from "react-quill";

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
export const BlackLine = styled.div<{
  marginTop?: number;
  width?: number;
  checkColor?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "300px")};
  height: 0px;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "60px")};
  border: ${(props) =>
    props.checkColor ? `1px solid ${props.checkColor}` : `1px solid #e5e5e5`};
`;

export const Vector = styled.img`
  position: absolute;
  margin-top: 40px;
  cursor: pointer;
`;

export const HamburgerMenu = styled.div<{ show?: boolean }>`
  width: 40px;
  height: 30px;
  position: relative;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  margin-right: 34px;
  margin-left: 10px;
  cursor: pointer;
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 4px;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  span:nth-of-type(1) {
    top: 0;
    -webkit-transform: ${(props) =>
      props.show ? "translateY (13px) rotate (-45deg)" : ""};
    transform: ${(props) =>
      props.show ? "translateY(13px) rotate(-45deg)" : ""};
  }

  span:nth-of-type(2) {
    top: 13px;
    opacity: ${(props) => (props.show ? "0" : "")};
  }

  span:nth-of-type(3) {
    bottom: 0;
    -webkit-transform: ${(props) =>
      props.show ? "translateY(-13px) rotate(45deg)" : ""};
    transform: ${(props) =>
      props.show ? "translateY(-13px) rotate(45deg)" : ""};
  }
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

export const AutoBox = styled.div`
  display: flex;
  align-items: center;
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
export const PwInputBox = styled.div`
  display: flex;
  z-index: 1;
  opacity: 1;
  position: relative;
`;

export const PwVector = styled(MySvg)`
  position: absolute;
  right: 24px;
  top: 33px;
  cursor: pointer;
  background: auto;
  opacity: 0.7;
  & path {
    fill: ${({ color }) => color || ""};
  }
  &:hover path {
    fill: ${({ color }) => color || "#333333"};
    opacity: 1;
  }
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
  cursor: pointer;
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
  border-radius: 50%;
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
  cursor: pointer;
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

export const HeaderComponentBox = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;
export const HeaderComponent = styled.div`
  top: 0;
  height: 80px;
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
  align-items: center;
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
  width: 90px;
  height: 40px;
  margin-right: 5px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.1em;
  color: #ffffff;
  border-radius: 50px;
`;

//HomePage

export const HomePageMidComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HomeMenu = styled.div<{ show: boolean; logIn: boolean }>`
  width: 100%;
  height: ${(props) => (props.logIn === false ? "10vh" : "40vh")};

  display: ${(props) => (props.show === false ? "none" : "block")};
`;

export const HomeMenuList = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
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
  margin-left: 2px;
  margin-bottom: 22px;
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
  height: 44px;
  width: 94%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
`;
export const FilterCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  padding: 0px;
`;

export const FilterEachCategory = styled.div<{ click: boolean }>`
  height: 43px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  letter-spacing: -0.1em;
  cursor: pointer;
  color: ${(props) => (props.click === true ? `#333333` : `#999999`)};

  border-bottom: ${(props) =>
    props.click === true ? `3px solid #333333` : ``};
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
  cursor: pointer;
`;

//홈카드
export const CardImg = styled.img`
  margin-top: 60px;
  width: 150px;
  height: 150px;
  border-radius: 190px;
  background: #eeeeee;
  border: 1px solid #e8f5ff;
`;

export const PortfolioProfileImg = styled.img`
  margin-top: 60px;
  width: 196px;
  height: 196px;
  border-radius: 321.5px;
  border: 13px solid #f5f5f5;
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
  height: 100px;
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

//makePortfolio
export const MakePortfolioBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

export const MakePortfolioInsideBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MakePortfolioHeadTxt = styled.div`
  margin-top: 40px;
  width: 260px;
  height: 67px;
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

export const GrayExplainTxt = styled.div`
  margin-top: 5px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  width: 216px;
  height: 26px;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;

  color: #999999;
`;

export const DetailJobTxt = styled.div`
  height: 20px;
  width: 600px;
  margin-top: 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1em;
  color: #333333;
`;

export const PortfollioTxt = styled.div`
  height: 20px;
  width: 900px;
  margin-top: 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.1em;
  color: #333333;
`;

export const GetPortfolioBox = styled.div`
  background: #ffffff;
  margin-top: 20px;
  width: 900px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const PortFolioTitleTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  width: 880px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #222222;
`;
export const PortFolioNameArrayTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  width: 880px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #222222;
`;
export const PortFolioContentTxt = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  width: 840px;
  word-break: break-all;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 400;

  line-height: 33px;
  letter-spacing: -0.1em;
  color: #222222;
`;

export const MakePortFolioNormalInput = styled.input`
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

export const SnsBox = styled.div`
  display: flex;
`;
export const SnsSelectField = styled.select`
  box-sizing: border-box;
  width: 214px;
  margin-right: 2px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
`;

export const SnsInput = styled.input`
  box-sizing: border-box;
  width: 384px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  padding-top: 0;
  &::placeholder {
    color: #999999;
  }
`;

export const UnderUserInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UnderUserInput = styled.div`
  margin-top: 10px;
  width: 600px;
  height: 23px;
  display: flex;
  justify-content: space-between;
`;

export const MakePortFolioNextBtn = styled.button`
  width: 600px;
  height: 60px;
  margin-top: 40px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.1em;
  margin-bottom: 200px;
  cursor: pointer;
  color: #ffffff;
`;

export const DeletePortfolioButton = styled.button`
  width: 600px;
  height: 60px;
  margin-top: 10px;
  cursor: pointer;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.1em;
  margin-bottom: 10px;
  color: #ffffff;
`;
//MakePortfolioSecondComponent
export const CareerInputBox = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
`;

export const CareerInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  width: 193px;
  height: 60px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  & + input {
    margin-left: 16px;
  }
  color: #999999;
`;

export const ResultPortfolioInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin-top: 10px;
  width: 600px;
  height: 60px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  color: black;
  & + textarea {
    //margin-top: 10px;
  }
`;

export const TextAreaStyled = styled.textarea`
  margin-top: 10px;
  padding-top: 10px;
  box-sizing: border-box;
  width: 600px;
  height: 186px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.1em;

  color: #999999;
`;

export const ResultPortfolioTextArea = styled.textarea`
  margin-top: 10px;

  box-sizing: border-box;
  width: 600px;
  height: 186px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.1em;

  color: black;
`;

export const MakePortfolioAddButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;

  color: #333333;
`;

export const PortfolioNavDiv = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
`;

export const PortfolioNav = styled.div`
  margin-right: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1em;
  color: #999999;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const PortfolioNameTxt = styled.div`
  margin-top: 20px;
  width: 296px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.1em;
  color: #222222;
`;

export const PortfolioDetailJobTxt = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 163px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #999999;
`;

export const PortfolioFollowButton = styled.div`
  justify-content: center;
  align-items: center;
  width: 140px;
  margin-top: 20px;
  background: #222222;
  border-radius: 50px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 39px;
  text-align: center;
  letter-spacing: -0.1em;
  cursor: pointer;
  color: #ffffff;
`;

export const PortfolioIntroduceTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 899px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 56px;
  letter-spacing: -0.1em;
  color: #222222;
`;

export const PortfolioEduCareerSnsHeaderBox = styled.div`
  display: flex;

  width: 899px;
  margin-top: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #999999;
`;

export const PortfolioEduHeader = styled.div`
  width: 32px;
  margin-right: 218px;
`;

export const PortfolioCareerHeader = styled.div`
  width: 76px;
  margin-right: 335px;
`;

export const PortfolioSnsHeader = styled.div`
  width: 47px;
`;
export const PortfolioEduCareerSnsContentBox = styled.div`
  display: flex;
  width: 899px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #222222;
`;

export const PortfolioEduBox = styled.div`
  width: 150px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioCareerBox = styled.div`
  width: 300px;
  margin-right: 110px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioSnsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;
export const HeaderLoginImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const HeaderLoginBtn = styled.button`
  margin-right: 10px;
  background-color: #f5f5f5;
  border: none;
`;
//PortfolioPage

export const PortfolioBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

export const PortfolioInsideBox = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//blogEditor

//MakeBlogComponent
export const MakeBlogHeader = styled.div`
  top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
`;

export const WhiteBox = styled.div`
  width: 88px;
  margin-left: 20px;
`;

export const MakeBlogTable = styled.table`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  align-items: center;
  justify-content: center;
`;

export const TableLine = styled.div`
  width: 50vw;
  height: 0px;

  border: 1px solid #e5e5e5;
`;

export const TableTr = styled.tr`
  width: 50vw;
  margin-top: 20px;
`;

export const MakeBlogTitleInput = styled.input`
  width: 50vw;
  height: 5vh;
  background: #f5f5f5;
  border: none;
  &:focus {
    outline: none;
  }

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;
  /* identical to box height, or 108% */

  letter-spacing: -0.1em;
  color: #cccccc;
`;

export const CustomReactQuill = styled(ReactQuill)`
  width: 50vw;
  height: 60vh;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 33px;
  /* or 183% */

  letter-spacing: -0.1em;

  color: #222222;
`;
export const MakeBlogBtn = styled.button`
  margin-right: 20px;
  width: 88px;
  height: 33px;
  background: #333333;
  border-radius: 56px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 39px;
  /* identical to box height, or 300% */
  color: #ffffff;
  display: flex;

  align-items: center;
  justify-content: center;
`;

//blogHeader
export const BlogHeaderProfile = styled.img`
  width: 34px;
  height: 34px;

  background: #eeeeee;
  border: 13px solid #f5f5f5;
  border-radius: 321.5px;
`;

export const BlogHeaderDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 150px;
`;

export const BlogHeaderNavigateDiv = styled.div`
  margin-right: 10px;
  height: 27px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  /* identical to box height, or 169% */

  text-align: center;
  letter-spacing: -0.1em;

  color: #999999;
`;
//GetBlogAllComponent
export const GetBlogAllTableLine = styled.div`
  width: 100vw;
  height: 0px;
  border: 1px solid #cccccc;
`;

export const GetBlogAllTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/

  align-items: center;
  justify-content: center;

  border-collapse: separate;
  border-spacing: 0 10px;
  margin-bottom: 20px;
`;
export const GetBlogAllTr = styled.tr`
  width: 50vw;
  margin-top: 20px;
`;

export const GetBlogAllHeader = styled.td`
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GetBlogMoreBtn = styled.button`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;

  color: #666666;
  width: 50px;
  height: 50px;
  left: 877px;
  top: 1193px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
`;

export const PostBlogBtn = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 56px;
  cursor: pointer;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #333333;
`;
export const PostBlogImg = styled.img`
  width: 16px;
  height: 16px;
`;
export const SearchBlogInput = styled.input`
  width: 232px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #333333;
  &:focus {
    outline: none;
  }
  background: #f5f5f5;
`;
export const SearchBlogImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const GetBlogAllTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #222222;
  margin-left: 10px;
`;
export const GetBlogAllContent = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  color: #9a9a9a;
  margin: 10px;
`;
export const GetBlogAllCreated = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  margin-right: 10px;
`;

export const GetBlogAllBox = styled.div`
  width: 50vw;
  height: 20vh;
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis;
  line-height: 33px;
`;
export const GetBlogNextImg = styled.img`
  width: 15px;
  height: 15px;
`;

//GetBlogComponent
export const GetBlogUserBox = styled.div`
  display: flex;
  align-items: center;
`;
export const GetBlogUser = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;

export const GetBlogUserImg = styled.img`
  width: 34px;
  height: 34px;
  background: #eeeeee;
  border: 13px solid #f5f5f5;
  border-radius: 321.5px;
`;
export const GetBlogCreated = styled.div`
  margin-left: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 39px;
  letter-spacing: -0.1em;
  color: #999999;
`;
export const GetBlogTitle = styled.div`
  height: 39px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 39px;
  /* identical to box height, or 85% */
  letter-spacing: -0.1em;
  color: #333333;
`;

export const GetBlogContent = styled.div`
  width: 900px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 33px;
  /* or 183% */
  letter-spacing: -0.1em;
  color: #222222;
`;
export const GetBlogBtnTd = styled.td``;
export const GetBlogBtn = styled.button`
  margin-right: 5px;
  width: 102px;
  height: 45px;
  left: 1196px;
  border: 1px solid #cccccc;
  border-radius: 56px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 39px;
  text-align: center;
  letter-spacing: -0.1em;
  color: #222222;
`;
//getComments
export const GetCommentsHeaderBox = styled.td`
  width: 50vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GetCommentsDiv = styled.div`
  width: 50vw;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  line-height: 33px;
`;
export const GetCommentsProfile = styled.img`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 321.5px;
`;
export const GetCommentsMoreBtn = styled.button`
  background: #ffffff;
  border: none;
`;
export const DeleteCommentImg = styled.img`
  width: 15px;
  height: 15px;
  background: #ffffff;
`;
//postComment
export const PostCommentTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/

  align-items: center;
  justify-content: center;

  border-collapse: separate;
  border-spacing: 0 10px;
`;
export const PostCommentInput = styled.input`
  width: 580px;
  height: 50px;
  background: #ffffff;
  border-radius: 15px;
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
export const PostCommentBtn = styled.button`
  height: 50px;
  border: 1px solid #cccccc;
  border-radius: 56px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 39px;
  text-align: center;
  letter-spacing: -0.1em;
  color: #222222;
`;

//introduce
export const IntroduceBox = styled.div`
  position: relative;
  margin-top: 80px;
  display: flex;
`;
export const ScrollBox = styled.div`
  border: 1px solid #cccccc;
  border-radius: 50px;
  position: fixed;
  top: 150px;
  left: 5px;
  width: 200px;
  padding: 20px 0;
  transition: all 0.5s ease;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */
  letter-spacing: -0.1em;
  color: #999999;
  text-align: center;
`;

export const ContentBox = styled.div`
  margin-left: 300px;
  margin-top: 10px;
`;
export const ArrowDownImg = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 30px;
`;
export const TestDiv = styled.div`
  // height:500px;
  margin-top: 10px;
  // background: #FFFFFF;
`;
export const IntroduceTitleDiv = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  color: #333333;
`;
export const ContentDiv = styled.div`
  margin-top: 10px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  background: #ffffff;
  line-height: 36px;
  letter-spacing: -0.1em;
`;
