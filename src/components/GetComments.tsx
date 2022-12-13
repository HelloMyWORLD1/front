import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  GetBlogAllTable,
  GetBlogAllTr,
  GetCommentsHeaderBox,
  GetBlogAllTitle,
  GetBlogAllContent,
  GetBlogAllCreated,
  GetCommentsDiv,
  GetCommentsProfile,
  GetCommentsMoreBtn,
  DeleteCommentImg,
  PostCommentInput,
  PostBlogBtn,
} from "./styled";
import moreBtn from "../img/moreBtn.png";
import deleteImg from "../img/delete.png";
import editImg from "../img/edit.png";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  getComment,
  deleteComment,
  updateComment,
} from "../slices/comment/commentSlice";

interface Comment {
  commentId: number;
  nickname: string;
  profile: string;
  content: string;
  createdAt: string;
}
export default function GetComments() {
  // const {user} = useSelector(
  //   (state:RootState) => state.user
  // );
  const { comment, comments } = useSelector(
    (state: RootState) => state.comment
  );
  const dispatch = useAppDispatch();
  const blogIdNum = Number(document.location.href.split("/:")[1]);
  // console.log(document.location.href.split("/")[4]);
  const [blogId, setBlogId] = React.useState<getCommentType>({
    blogId: blogIdNum,
  });
  const [commentCnt, setCommentCtn] = React.useState<number>(0);
  const [detailComments, setDetailComments] = React.useState<Comment[]>([]);
  const [deleteCommentData, setDeleteCommentData] =
    React.useState<deleteCommentType>({
      blogId: blogIdNum,
      commentId: 0,
    });
  const USERINFO = localStorage.getItem("userInfo");
  const [updateCommentData, setUpdateCommentData] =
    React.useState<updateCommentType>({
      blogId: blogIdNum,
      commentId: 0,
      request: {
        content: "",
      },
    });
  const [updateContent, setUpdateContent] = React.useState<string>("");
  const [updateOpen, setUpdateOpen] = React.useState<boolean>(false);

  const deleteOnClick = (e: any) => {
    // console.log(Number(e.target.id),blogIdNum);
    deleteCommentData.commentId = Number(e.target.id);
    // console.log(deleteCommentData);
    // console.log(e.target.className.split(" ")[2]);
    // console.log(user.nickname);
    // console.log(USERINFO);
    if (USERINFO === e.target.className.split(" ")[2]) {
      dispatch(deleteComment(deleteCommentData));
    } else {
      alert("본인의 댓글만 삭제 가능합니다.");
    }
  };
  const updateOnClick = (e: any) => {
    console.log(Number(e.target.id), blogIdNum);
    setUpdateCommentData({
      blogId: blogIdNum,
      commentId: Number(e.target.id),
      request: {
        content: "",
      },
    });
    setUpdateOpen(!updateOpen);
  };
  useEffect(() => {
    dispatch(getComment(blogId)).then((res) => {
      setDetailComments(res.payload.data.comments);
      setCommentCtn(res.payload.data.length);
    });
  }, []);

  const commentHandler = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    setUpdateContent(event.currentTarget.value);
  };
  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      updateCommentData.request.content = updateContent;
      // console.log(updateCommentData);
      dispatch(updateComment(updateCommentData));
    },
    [dispatch, updateCommentData, updateContent]
  );

  // const removeUpdate = () => {
  //   setUpdateOpen(!updateOpen);
  // };
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
                    <GetCommentsMoreBtn onClick={deleteOnClick}>
                      <DeleteCommentImg
                        id={comment.commentId.toString()}
                        className={comment.nickname}
                        src={deleteImg}
                      ></DeleteCommentImg>
                    </GetCommentsMoreBtn>
                    <img src={moreBtn}></img>
                    <GetCommentsMoreBtn onClick={updateOnClick}>
                      <DeleteCommentImg
                        id={comment.commentId.toString()}
                        src={editImg}
                      ></DeleteCommentImg>
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
      <GetBlogAllTr >
        <td>
          <div>댓글 {commentCnt}</div>
        </td>
      </GetBlogAllTr>
      {commentLists}
      <GetBlogAllTr>
        <td>
          {updateOpen ? (
            <form onSubmit={onSubmit}>
              <PostCommentInput
                type="text"
                placeholder="수정할 댓글을 입력하세요."
                onChange={commentHandler}
              ></PostCommentInput>
              <PostBlogBtn>수정하기</PostBlogBtn>
            </form>
          ) : (
            <div></div>
          )}
        </td>
      </GetBlogAllTr>
    </GetBlogAllTable>
  );
}
