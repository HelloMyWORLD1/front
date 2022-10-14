import React from "react";
import LoginForm from "../components/LoginForm";
import { LogoImg } from "../components/styled";
import logo from "../img/logo.png"

function LogInPage() {
    return (
        <div>
            <LogoImg src={logo}></LogoImg>
            <LoginForm />
        </div>
    );
}

export default LogInPage;
