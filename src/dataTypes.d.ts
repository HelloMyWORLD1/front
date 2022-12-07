type signUpType = {
  email: string;
  password: string;
  username: string;
  field: string;
  phone: string;
  profileImage: string;
  birth: string;
  nickname: string;
};
type editProfileType = {
  email: string;
  username: string;
  field: string;
  phone: string;
  birth: string;
  nickname: string;
};
type userType = {
  email: string;
  field: string;
  username: string;
  phone: string;
  profileImage: string;
  birth: string;
  nickname: string;
  authorityDtoSet: { authorityName: string }[];
};

type portFolioRegisterType = {
  detailJob: string;
  title: string;
  introduce: string;
  tech: { techName: string; content: string }[];
  education: string;
  sns: string[];
  certificate: string[];
  foreignLanguage: string[];
  project: { title: string; content: string }[];
  career: { year: string; title: string; content: string }[];
};

type CareerArrayType = {
  year: string;
  title: string;
  content: string;
};

//수정해야함 백엔드와 username => email 변경해야함
type logInType = {
  email: string;
  password: string;
};

type getPortFoiloLikeType = {
  field: string;
};

type getPortFolioType = {
  nickname: string;
};

type getPortFolioLatestType = {
  field: string;
  pageNum: number;
};
type portfolioProjectType = {
  title: string;
  content: string;
};

type techNique = {
  techName: string;
  content: string;
};

type portFolioType = {
  sns: string[];
  detailJob: string;
  title: string;
  introduce: string;
  profileImage: string;
  field: string;
  tech: { techName: string; content: string }[];
  education: string;
  certificate: string[];
  foreignLanguage: string[];
  project: { title: string; content: string }[];
  career: { year: string; title: string; content: string }[];
  followings: string[];
  followers: string[];
};

type portFoliosType = {
  nickname: string;
  detailJob: string;
  profileImage: string;
  title: string;
  introduce: string;
  followers: string[];
  followings: string[];
};

//blog 데이터 타입
type postBlogType = {
  title: string;
  content: string;
};
type getBlogDetailType = {
  blogId: number;
};
type getBlogAllType = {
  nickname: string;
  pageNum: number;
};
type searchBlogType = {
  nickname: string;
  keyword: string;
};
type deleteBlogType = {
  blogId: number;
};
type updateBlogType = {
  blogId: number;
  request: {
    title: string;
    content: string;
  };
};

//comment 타입(조회,등록,수정,삭제)
type getCommentType = {
  blogId: number;
};
type postCommentType = {
  blogId: number;
  request: {
    content: string;
  };
};
type updateCommentType = {
  blogId: number;
  commentId: number;
  request: {
    content: string;
  };
};
type deleteCommentType = {
  blogId: number;
  commentId: number;
};

type FollowType = {
  nickname: string;
};

interface GetPortFolioLength {
  field: string;
}
interface PortFolioResponse {
  data: number;
}

type ProfileType = {
  images: any;
};

interface getPortFolioUserRequest {
  nickname: string;
}
