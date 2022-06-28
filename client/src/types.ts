
import * as React from "react"


export interface ThemeProps {
  mode: string;
  toggle(): void;
}

export interface ContextProps {
  showPostModal: boolean;
  setShowPostModal: React.Dispatch<React.SetStateAction<boolean>>
  color: string;
  numberIconDisplayState: boolean;
  numberIconNums: { mails: number; notifications: number };

  showPassword: boolean;
  toggleShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
 

}

export interface IconProps {
  color: string;
  dropShadow: boolean;
  scaleFactor:number;
}

export interface FilterProps {
  dropShadow:boolean;
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
  userName: string;
  eMailAddress: string;
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




