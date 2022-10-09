// types,interface 를 전역으로 지정

interface UserInitialState {
    user: null | object;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: null | object;
    logOutLoading: boolean;
    logOutDone: boolean;
    logOutError: null | object;
    signUpLoading: boolean;
    signUpDone: boolean;
    signUpError: null | object;
    findPasswordLoading: boolean;
    findPasswordDone: boolean;
    findPasswordError: null | object;
    inquireMyInfoLoading: boolean;
    inquireMyInfoDone: boolean;
    inquireMyInfoError: null | object;
    reviseMyInfoLoading: boolean;
    reviseMyInfoDone: boolean;
    reviseMyInfoError: null | object;
    deleteAccountLoading: boolean;
    deleteAccountDone: boolean;
    deleteAccountError: null | object;
}

interface BlogInitalState {
    blog: null | object;
    registerPortFolioLoading: boolean;
    registerPortFolioDone: boolean;
    registerPortFolioError: null | object;
    getPortFolioLoading: boolean;
    getPortFolioDone: boolean;
    getPortFolioError: null | object;
}
