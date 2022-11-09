import React, { useState } from "react";
import { useEffect } from "react";
import ImageUpload from "../subComponents/ImageUpload";
import BlogEditor from "../subComponents/BlogEditor";
import { useRef } from "react";
import defaulfImage from "../img/Mask group.png";

export default function TestPage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `${API_KEY}`;

  const TEST_KEY = process.env.REACT_APP_TEST;

  const editorRef = useRef();

  const [profile,setProfile] = useState(false);
  const PROFILE_TEST = localStorage.getItem("profileImageTest");
  useEffect(() => {
    console.log(PROFILE_TEST);
    setProfile(true)

  },[PROFILE_TEST])

  useEffect(() => {
      console.log(url);
  },[]);
  
  return (<div>
      테스트페이지
      <ImageUpload /> 
      <BlogEditor />
      {/* {profile ? (<img src={PROFILE_TEST}></img>):( <img src={defaulfImage}></img>
)} */}
     
      </div>);
}
