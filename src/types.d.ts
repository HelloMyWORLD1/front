// types,interface 를 전역으로 지정

interface UserInitialState {
    logInLoading: boolean;
    logInDone: boolean;
    logInError: null | string;
    logOutLoading: boolean;
    logOutDone: boolean;
    logOutError: null | string;
    signUpLoading: boolean;
    signUpDone: boolean;
    signUpError: null | string;
    findPasswordLoading: boolean;
    findPasswordDone: boolean;
    findPasswordError: null | string;
    inquireMyInfoLoading: boolean;
    inquireMyInfoDone: boolean;
    inquireMyInfoError: null | string;
    reviseMyInfoLoading: boolean;
    reviseMyInfoDone: boolean;
    reviseMyInfoError: null | string;
    deleteAccountLoading: boolean;
    deleteAccountDone: boolean;
    deleteAccountError: null | string;
}

interface BlogInitalState {}
