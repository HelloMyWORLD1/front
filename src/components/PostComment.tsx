import React, { useCallback, useEffect, useState } from "react";
import { GetBlogAllTr,PostCommentTable ,PostCommentInput,PostBlogBtn} from "./styled";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { registerComment } from "../slices/commentSlice";
import { useLocation } from "react-router-dom";

export default function PostComment() {
  const { comment, comments } = useSelector(
    (state: RootState) => state.comment
  );
  const dispatch = useAppDispatch();
  const blogIdNum = Number(document.location.href.split("/:")[1]);
  console.log(document.location.href.split("/")[4]);
  const [commentData, setCommentData] = React.useState<postCommentType>({
    blogId:blogIdNum,
    request:{
        content:""
    }
  });
  const commentHandler = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    setCommentData({
        blogId:blogIdNum,
        request:{
            content: event.currentTarget.value
        }
    })
  };
  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(commentData);
      dispatch(registerComment(commentData));
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
