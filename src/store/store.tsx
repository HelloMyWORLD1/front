import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import portFolioSlice from "../slices/portFolioSlice";
import blogSlice from "../slices/blogSlice";
import commentSlice from "../slices/commentSlice";

// 전역으로 관리하기 위한 스토어
const store = configureStore({
  reducer: {
    user: userSlice,
    portFolio: portFolioSlice,
    blog: blogSlice,
    comment: commentSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
