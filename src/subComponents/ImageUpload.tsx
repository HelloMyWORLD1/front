import React, { useRef, useCallback, useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import defaulfImage from "../img/Mask group.png";

function ImageUpload() {
  const [preview, setPreview] = useState<string>(""); // 인코딩한 src가 담김
  const [image, setImage] = useState<File>(); // 업로드 할 이미지 파일이 담김
  const inputRef = useRef<HTMLInputElement | null>(null); //버튼 클릭 시 input 요소에 접근하기 위해 선언
  const reader = new FileReader(); //이미지파일을 base64로 인코딩 하기 위함

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        localStorage.setItem("profileImageTest",preview);
      };
      reader.readAsDataURL(image)
     
    } else {
      setPreview("");
    }
    console.log(image);
    console.log(preview);
    if (preview != "") {
      handlingDataForm(preview);
      console.log("handlingDataForm 실행!")
    }
  }, [image, preview]);
  //blob객체에 답아 통신
  const handlingDataForm = (preview : string) => {
    console.log(typeof preview);
    // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
    const block = preview.split(";");
    console.log(block);
    const contentType = block[0].split(":")[1]; // In this case "image/gif"
    console.log(contentType);
    // get the real base64 content of the file
    const byteString = atob(block[1].split(",")[1]); // In this case "iVBORw0KGg...."
    console.log(byteString);

    // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: contentType
    });
    const file = new File([blob], contentType);

    // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
    // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.
    const formData = new FormData();
    formData.append("image", file);
    console.log(file);

    //dispatch
  };
  //버튼 클릭 시 실행
  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      console.log(e.target.files[0]);
      actionImgCompress(e.target.files[0]); //압축함수 호출
    },
    []
  );
  // 이미지 압축
  const actionImgCompress = async (fileSrc: any) => {
    console.log("압축 시작");
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(fileSrc, options);
      setImage(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  //버튼 클릭 시 inputref 활용하여 인풋 요소에 접근하여 UploadImage함수 실행됨
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, [preview]);
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
        accept="image/jpeg,image/jpg,image/png"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      ></input>
      <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
    </div>
  );
}
export default ImageUpload;
