import React, { useRef, useCallback, useState, useEffect } from "react";
import defaulfImage from "../img/Mask group.png"

function ImageUpload() {
  const [preview, setPreview] = useState<string>(); // 파일 base64
  const [image, setImage] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const reader = new FileReader();

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setImage(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      //API호출(post방식으로 formData 보내기)
      console.log(e.target.files[0]);
    },
    []
  );
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div>
       {preview ? (
    <img src={preview} alt={"preview"} style={{ objectFit: "cover" }} />):(<img src={defaulfImage}></img>)}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      ></input>
      <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
    </div>
  );
}
export default ImageUpload;
