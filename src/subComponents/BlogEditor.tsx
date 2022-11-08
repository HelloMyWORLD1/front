import React, { useRef, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

function BlogEditor() {
  // Editor DOM 선택용
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState<string>("");
  const [editor, setEditor] = useState<string>("");

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

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    console.log(contents);
    setEditor(contents);
    console.log(editor);
    console.log(typeof editor);
  };

  return (
    <div>
      <h3>### Editor Quill</h3>
      <ReactQuill
        ref={(element: any) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
      <button onClick={handleRegisterButton}>등록</button>
      <div>
        <h3>미리보기</h3>
        <div dangerouslySetInnerHTML={{ __html: editor }}></div>
      </div>
    </div>
  );
}
export default BlogEditor;
