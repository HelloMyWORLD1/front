import React, { useEffect, useRef, useState } from "react";
import {
  GetBlogAllTable,
  GetBlogAllTr,
  GetBlogAllBox,
  GetCommentsHeaderBox,
  GetBlogAllTitle,
  GetBlogAllContent,
  GetBlogAllCreated,
  GetCommentsDiv,
  GetCommentsProfile,
  GetCommentsMoreBtn,
  DeleteCommentImg
} from "./styled";
import testImg from "../img/testImg.png";
import moreBtn from "../img/moreBtn.png";
import deleteImg from "../img/delete.png";
import editImg from "../img/edit.png";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getComment,deleteComment } from "../slices/commentSlice";

interface Comment {
  commentId: number;
  nickname: string;
  profile: string;
  content: string;
  createdAt: string;
}
export default function GetComments() {
  const { comment, comments } = useSelector(
    (state: RootState) => state.comment
  );
  const dispatch = useAppDispatch();
  const blogIdNum = Number(document.location.href.split("/:")[1]);
  console.log(document.location.href.split("/")[4]);
  const [blogId, setBlogId] = React.useState<getCommentType>({
    blogId: blogIdNum,
  });
  const [commentCnt, setCommentCtn] = React.useState<number>(0);
  const [detailComments, setDetailComments] = React.useState<Comment[]>([]);
  const [deleteCommentData,setDeleteCommentData] = React.useState<deleteCommentType>({
    blogId: blogIdNum,
    commentId: 0
  })

  const deleteOnClick = (e:any) => {
    console.log(Number(e.target.id),blogIdNum);
    deleteCommentData.commentId = Number(e.target.id);
    console.log(deleteCommentData);
    dispatch(deleteComment(deleteCommentData));
  }
  const updateOnClick = (e:any) => {
    console.log(Number(e.target.id),blogIdNum);
  }
  useEffect(() => {
    dispatch(getComment(blogId)).then((res) => {
      setDetailComments(res.payload.data.comments);
      setCommentCtn(res.payload.data.length);
    });
  }, []);

  const commentLists: JSX.Element[] = detailComments.map((comment) => {
    return (
      <GetBlogAllTr>
        <td>
          <GetCommentsDiv>
            <table>
              <tr>
                <GetCommentsHeaderBox>
                  <GetBlogAllTitle>
                    <GetCommentsProfile
                      src={comment.profile}
                    ></GetCommentsProfile>{" "}
                    {comment.nickname} {comment.createdAt.slice(0, 9)}
                  </GetBlogAllTitle>
                  <div></div>
                  <GetBlogAllCreated>
                    <GetCommentsMoreBtn onClick={deleteOnClick} >
                        <DeleteCommentImg id={comment.commentId.toString()} src={deleteImg}></DeleteCommentImg>
                    </GetCommentsMoreBtn>
                    <img src={moreBtn}></img>
                    <GetCommentsMoreBtn onClick={updateOnClick} >
                        <DeleteCommentImg id={comment.commentId.toString()} src={editImg}></DeleteCommentImg>
                    </GetCommentsMoreBtn>
                  </GetBlogAllCreated>
                </GetCommentsHeaderBox>
              </tr>
              <tr>
                <td>
                  <GetBlogAllContent>{comment.content}</GetBlogAllContent>
                </td>
              </tr>
            </table>
          </GetCommentsDiv>
        </td>
      </GetBlogAllTr>
    );
  });

  return (
    <GetBlogAllTable>
      <GetBlogAllTr>
        <td>
          <div>댓글 {commentCnt}</div>
        </td>
      </GetBlogAllTr>
      {commentLists}
    </GetBlogAllTable>
  );
}
