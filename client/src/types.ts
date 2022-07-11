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
  showNewMessageModal: boolean;
  setShowNewMessageModal: React.Dispatch<React.SetStateAction<boolean>>;
  conversationId: string;
  setConversationId: React.Dispatch<React.SetStateAction<string>>;
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
  recipient: string | null;
  setRecipient: React.Dispatch<React.SetStateAction<string | null>>;
  recipientId: string | null;
  setRecipientId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface AuthContextProps {
  loggedIn: boolean;
  username: string;
  handleLogin: (_username: string, _userId:string) => void;
  userId: string;

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

export interface FeedState {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

export interface CommentProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export interface FeedProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
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

export interface MessageProps {
  text: string;
  date: string;
  username: string;
}
