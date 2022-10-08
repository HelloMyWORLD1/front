import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./pages/HomePage"
=======
import HomePage from "./pages/HomePage";
>>>>>>> de9dacada0d32cae350c4c1369a23f486587f840
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

//Route 설정.

const App = () => {
    return (
        <Routes>
            {/* 홈페이지 */}
            <Route path="/" element={<HomePage />}></Route>

            {/* 로그인, 회원가입 */}
            <Route path="/logIn" element={<LogInPage />}></Route>
            <Route path="/signUp" element={<SignUpPage />}></Route>
        </Routes>
    );
};

export default App;
