import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import PortFolioPage from "./pages/PortFolioPage";
import SignUpProfilePage from "./pages/SignUpProfilePage";

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
                <Route
                    path="/signUp/profile"
                    element={<SignUpProfilePage />}
                ></Route>

                {/* 포트폴리오 페이지 */}
                <Route
                    path="/blog/get/:nickname"
                    element={<PortFolioPage />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
