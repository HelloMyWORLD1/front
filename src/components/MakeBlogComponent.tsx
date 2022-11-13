import React, { useCallback } from "react";
import logo from "../img/logo.png";
import { HeaderComponent, LogoImg } from "./styled";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch } from "../hooks";
import { registerBlog } from "../slices/blogSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function MakeBlogComponent() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickLogo = () => {
    navigate("/");
  };

  const [editorValue, setEditorValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );

  const titleHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }

  useEffect(() => {
    console.log("제목",title)
    console.log("내용",editorValue);
  }, [editorValue,title]);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            registerBlog({
                title: title,
                content: editorValue
            })

        )

    },[dispatch,title,editorValue]
  )

  return (
    <div>
      <HeaderComponent>
        <div></div>
        <div>
          <LogoImg
            onClick={onClickLogo}
            src={logo}
            width={61}
            height={35}
            marginTop={1}
          ></LogoImg>
        </div>
        <div></div>
      </HeaderComponent>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력하세요" value={title} onChange={titleHandler} ></input>
        <ReactQuill
          value={editorValue}
          onChange={setEditorValue}
          modules={modules}
          theme="snow"
          placeholder="내용을 입력해주세요."
        />
        <button>등록하기</button>
      </form>
    </div>
  );
}
