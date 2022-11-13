import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import PortFolioPage from "./pages/PortFolioPage";
import SignUpProfilePage from "./pages/SignUpProfilePage";
import FindPwPage from "./pages/FindPwPage";
import TestPage from "./pages/TestPage";
import MakePortFolioPage from "./pages/MakePortFolioPage";
import MakeBlogPage from "./pages/MakeBlogPage";
//Route 설정.

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {/* 홈페이지 */}
        <Route path="/" element={<HomePage />}></Route>

        {/* 로그인, 회원가입 */}
        <Route path="/logIn" element={<LogInPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/signUp/profile" element={<SignUpProfilePage />}></Route>
        <Route path="/findpassword" element={<FindPwPage />}></Route>

        {/* 포트폴리오 등록 페이지 */}
        <Route path="/makePortfolio" element={<MakePortFolioPage />}></Route>
        {/* 포트폴리오 페이지 */}
        <Route path="/blog/get/:nickname" element={<PortFolioPage />}></Route>

        {/* 블로그 등록 페이지 */}
        <Route path="/makeBlog" element={<MakeBlogPage />}></Route>

        {/* url 주소 테스트 페이지 */}
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
