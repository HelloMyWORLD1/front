import React, { useState } from "react";
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
  GetCommentsMoreBtn
} from "./styled";
import testImg from "../img/testImg.png";
import moreBtn from "../img/moreBtn.png"

interface Comment {
  nickname: string;
  profile: string;
  content: string;
  createdAt: string;
}
export default function GetComments() {
  const [comments, setComments] = React.useState<Comment[]>([
    {
      nickname: "Jaewon",
      profile: testImg,
      content:
        "댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력",
      createdAt: "2022.11.21",
    },
    {
      nickname: "Jaewon",
      profile: testImg,
      content:
        "댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력",
      createdAt: "2022.11.21",
    },
    {
      nickname: "Jaewon",
      profile: testImg,
      content:
        "댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력",
      createdAt: "2022.11.21",
    },
    {
      nickname: "Jaewon",
      profile: testImg,
      content:
        "댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력댓글입력",
      createdAt: "2022.11.21",
    },
  ]);

  const commentLists: JSX.Element[] = comments.map((comment) => {
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
                    ></GetCommentsProfile> {comment.nickname} {comment.createdAt}
                  </GetBlogAllTitle>
                  <div></div>
                  <GetBlogAllCreated> 
                  <GetCommentsMoreBtn><img src={moreBtn}></img></GetCommentsMoreBtn></GetBlogAllCreated>
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
          <div>댓글 0</div>
        </td>
      </GetBlogAllTr>
      {commentLists}
    </GetBlogAllTable>
  );
}
