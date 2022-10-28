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

//수정해야함 백엔드와 username => email 변경해야함
type logInType = {
  username: string;
  password: string;
};
