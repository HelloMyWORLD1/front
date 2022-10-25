import React from "react";
import { useEffect } from "react";

export default function TestPage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://${API_KEY}/`;

  const TEST_KEY = process.env.REACT_APP_TEST;
  const test = TEST_KEY;

  useEffect(() => {
      console.log(url);
      console.log(test);
  },[]);
  
  return (<div>
      테스트페이지 
      </div>);
}
