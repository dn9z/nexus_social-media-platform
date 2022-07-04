import * as React from "react";

export interface ThemeProps {
  mode: string;
  toggle(): void;
}

export interface ContextProps {
  showPostModal: boolean;
  setShowPostModal: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  numberIconDisplayState: boolean;
  numberIconNums: { mails: number; notifications: number };
  showPassword: boolean;
  toggleShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthContextProps {
  loggedIn: boolean;
  username: string;
  handleLogin: (_username: string) => void;
}

export interface IconProps {
  color: string;
  dropShadow: boolean;
  scaleFactor: number;
}

export interface FilterProps {
  dropShadow: boolean;
  scaleFactor: number;
}

export interface CommentProps {
  post: {
    _user: string;
    _id: string;
    // title: string;
    body: string;
  };
}

export interface FeedState {
  post: {
    _user: string;
    _id: string;
    date: string;
    title: string;
    body: string;
  }[];
}

export interface FeedProps {
  post: {
    _user: string;
    _id: string;
    date: string;
    title: string;
    body: string;
    media?: string;
  };
}

export interface FormProps {
  children: JSX.Element[] | JSX.Element;
}

export interface InputTextFieldProps {
  passwordField: boolean;
}

export interface RegisterProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface DataInputProps {
  userName: string;
}

export interface ModalProps {
  show: boolean;
}

export interface PModalBottomContainerProps {
  bottomBorder: boolean;
}

export interface ProfileUserState {
  username: string;
}