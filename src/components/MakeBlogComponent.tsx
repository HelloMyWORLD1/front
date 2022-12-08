import React, { useCallback } from "react";
import logo from "../img/logo.png";
import {
  MakeBlogHeader,
  LogoImg,
  WhiteBox,
  MakeBlogTable,
  TableLine,
  TableTr,
  MakeBlogTitleInput,
  CustomReactQuill,
  MakeBlogBtn,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch } from "../hooks";
import { registerBlog } from "../slices/blog/blogSlice";

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
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (title === "" || editorValue === "" || editorValue === "<p><br></p>") {
        alert("제목과 내용 모두 입력해주세요!");
      } else {
        dispatch(
          registerBlog({
            title: title,
            content: editorValue,
          })
        ).then(() => navigate(-1));
      }
    },
    [dispatch, title, editorValue]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <MakeBlogHeader>
          <WhiteBox />
          <div>
            <LogoImg
              onClick={onClickLogo}
              src={logo}
              width={50}
              height={30}
              marginTop={1}
            ></LogoImg>
          </div>
          <div>
            <MakeBlogBtn>등록하기</MakeBlogBtn>
          </div>
        </MakeBlogHeader>

        <MakeBlogTable>
          <TableTr>
            <td>
              <MakeBlogTitleInput
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={titleHandler}
              ></MakeBlogTitleInput>
            </td>
          </TableTr>
          <TableTr>
            <td>
              <TableLine></TableLine>
            </td>
          </TableTr>
          <TableTr>
            <td>
              <CustomReactQuill
                value={editorValue}
                onChange={setEditorValue}
                modules={modules}
                theme="snow"
                placeholder="내용을 입력해주세요."
              />
            </td>
          </TableTr>
        </MakeBlogTable>
      </form>
    </div>
  );
}
