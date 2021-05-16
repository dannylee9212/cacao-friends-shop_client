import { Action } from 'redux';

export type UserState = {
  authUser: User | null;
  isLoading: boolean;
  error: string | null;
};

export type User = {
  userId: string;
  nickName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
};

export type LoginInfo = {
  email: string;
  password: string;
};

export type LoginSuccessInfo = {
  email: string;
  memberLevel: string;
  nickname: string;
};

export type PandingAction = Action &
  LoginInfo & {
    type: 'user/PENDING';
  };

export type LoginAction = Action &
  LoginInfo & {
    type: 'user/LOG_IN';
    userInfo: LoginInfo;
  };

//sign up
export type SignupUserInfo = {
  email: string;
  password: string;
  nickname: string;
  phone: string;
};

export type SignupSuccessInfo = {
  email: string;
  nickname: string;
  phone: string;
};

export type SignupAction = Action &
  SignupUserInfo & {
    type: 'user/SIGN_UP';
    userInfo: SignupUserInfo;
  };
