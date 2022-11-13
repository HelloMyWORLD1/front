import React from "react";
import logo from "../img/logo.png";
import { HeaderComponent, LogoImg } from "./styled";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function MakeBlogComponent() {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };

  const [editorValue, setEditorValue] = useState<string>("");

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
  useEffect(() => {
    console.log(editorValue);
  }, [editorValue]);

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
      
      <ReactQuill
        value={editorValue}
        onChange={setEditorValue}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
}
