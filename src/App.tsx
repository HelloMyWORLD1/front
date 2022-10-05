import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

//Route 설정.

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/logIn" element={<LogInPage />}></Route>
            <Route path="/signUp" element={<SignUpPage />}></Route>
        </Routes>
    );
};

export default App;
