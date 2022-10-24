import React from "react";
import { useEffect } from "react";

export default function TestPage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://${API_KEY}/`;
  useEffect(() => {
      console.log(url);
  },[]);
  return (<div>
      테스트페이지 
      </div>);
}
