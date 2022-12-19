import React, { useCallback, useEffect, useState } from "react";
import {
  GetBlogAllTr,
  PostCommentTable,
  PostCommentInput,
  PostBlogBtn,
} from "./styled";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { registerComment } from "../slices/comment/commentSlice";

export default function PostComment() {
  const { comment, comments } = useSelector(
    (state: RootState) => state.comment
  );
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const blogIdNum = Number(document.location.href.split("/:")[2]);
  console.log(document.location.href.split("/")[4]);
  const [commentData, setCommentData] = React.useState<postCommentType>({
    blogId: blogIdNum,
    request: {
      content: "",
    },
  });
  const commentHandler = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    setCommentData({
      blogId: blogIdNum,
      request: {
        content: event.currentTarget.value,
      },
    });
  };
  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(commentData);
      if (user) {
        dispatch(registerComment(commentData));
      } else {
        alert("로그인을 선행해주세요!");
      }
    },
    [dispatch, commentData]
  );

  return (
    <PostCommentTable>
      <GetBlogAllTr>
        <td>
          <form onSubmit={onSubmit}>
            <PostCommentInput
              type="text"
              placeholder="댓글을 입력하세요."
              onChange={commentHandler}
            ></PostCommentInput>
            <PostBlogBtn>등록하기</PostBlogBtn>
          </form>
        </td>
      </GetBlogAllTr>
    </PostCommentTable>
  );
}
