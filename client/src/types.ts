import * as React from "react";

export interface ThemeProps {
  mode: string;
  toggle(): void;
}

export interface ContextProps {

  backgroundModalSaved: boolean;
  setBackgroundModalSaved: React.Dispatch<React.SetStateAction<boolean>>
  showBackgroundModal: boolean;
  setShowBackgroundModal: React.Dispatch<React.SetStateAction<boolean>>

  avatarModalSaved: boolean;
  setAvatarModalSaved: React.Dispatch<React.SetStateAction<boolean>>
  showAvatarModal: boolean;
  setShowAvatarModal: React.Dispatch<React.SetStateAction<boolean>>
  showPostModal: boolean;
  setShowPostModal: React.Dispatch<React.SetStateAction<boolean>>;

  showErrorModal: boolean;
  setShowErrorModal: React.Dispatch<React.SetStateAction<boolean>>;

  needRefresh: boolean;
  setNeedRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  postsUpdated: boolean;
  setPostsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;

  showPassword: boolean;
  toggleShowPassword: React.Dispatch<React.SetStateAction<boolean>>;

  showNewMessageModal: boolean;
  setShowNewMessageModal: React.Dispatch<React.SetStateAction<boolean>>;


}

export interface AuthContextProps {
  loggedIn: boolean;
  username: string;

  userId: string;
  handleLogin: (_username: string, _userId: string) => void;

}

export interface IconProps {
  color: string;
  dropShadow: boolean;
  scaleFactor: number;

  onClick?: () => {};

}

export interface FilterProps {
  dropShadow: boolean;
  scaleFactor: number;
}

export interface CommentProps {
  post: {
    _user: string;
    _id: string;
    body: string;
    date: string;
  };
}

export interface CommentListProps {
  post: {
    _user: string;
    _id: string;
    body: string;
    date: string;
  };
}

export interface CommentState {
  comment: {
    _user: string;
    _id: string;
    body: string;
    date: string;
  }[];
}

export interface CommentItemProps {
  comment: {
    _user: string;
    _id: string;
    body: string;
    date: string;
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

export interface UserSearchState {
  user: {
    _id: string;
    username: string;
    avatar: string;
  }[];
}

export interface UserItemProps {
  user: {
    _id: string;
    username: string;
    avatar: string;

  };
}

export interface FormProps {
  children: JSX.Element[] | JSX.Element;
}

export interface InputTextFieldProps {
  passwordField: boolean;

}

export interface ResponsiveProps {
  width: string
  } 

export interface ProfileProps {
  _id: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  avatar:string;
  background: string;
}

export interface EditProfileProps {
  _id: string;
  firstName: string;
  lastName:string;
  username: string;
  email: string;
  bio: string;
  location: string;
  avatar: string;
  background: string;

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

export interface ErrorModalProps {
  show: boolean;
  message: string;
}


export interface MessageProps {
  text: string;
  date: string;
  username: string;
}
export interface ConfirmModalProps {
  showConfirmModal: boolean;
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  confirmFn: (arg0:string) => void;
  idToDelete:string;
}

export interface PModalBottomContainerProps {
  bottomBorder: boolean;
}

export interface ProfileUserState {
  _id: string;
  _following: [string];
  username: string;
  email: string;
  bio: string;
  location: string;
  avatar:string;
  background: string;

}
