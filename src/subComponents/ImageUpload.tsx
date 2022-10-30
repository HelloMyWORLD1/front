import React, { useRef, useCallback } from "react";
import { ImageFileInput } from "../components/styled";

function ImageUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      //API호출(post방식으로 formData 보내기)
      console.log(e.target.files[0]);
    },
    []
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div>
      {/* input display:none으로 안보이게 설정 */}
      <ImageFileInput
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
      ></ImageFileInput>
      <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
    </div>
  );
}
export default ImageUpload;
