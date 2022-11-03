import React, { useRef, useCallback, useState, useEffect } from "react";
import defaulfImage from "../img/Mask group.png";

function ImageUpload() {
  const [preview, setPreview] = useState<string>(); // 인코딩한 src가 담김
  const [image, setImage] = useState<File>(); // 업로드 할 이미지 파일이 담김
  const inputRef = useRef<HTMLInputElement | null>(null); //버튼 클릭 시 input 요소에 접근하기 위해 선언
  const reader = new FileReader(); //이미지파일을 base64로 인코딩 하기 위함

//   이미지가 담기면 FileReader() 활용한다. 이때 readAsDataURL은 File 혹은 Blob 을 읽은 뒤 
//   base64로 인코딩한 문자열을 FileReader 인스턴스의 result라는 속성에 담아준다.
// FileReader.onload
// FileReader가 성공적으로 파일을 읽어들였을 때 트리거 되는 이벤트 핸들러이다.
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
  //버튼 클릭 시 실행되며 폼데이터에 파일을 담아 API를 호출하면 된다!
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

  //버튼 클릭 시 inputref 활용하여 인풋 요소에 접근하여 UploadImage함수 실행됨
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div>
        {/* 미리보기할 사진 있으면 보여주고 아니면 기본 이미지 보이도록 설정 */}
      {preview ? (
        <img src={preview} alt={"preview"} style={{ objectFit: "cover" }} />
      ) : (
        <img src={defaulfImage}></img>
      )}
      {/* display:none으로 버튼만 보이도록 설정 */}
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
