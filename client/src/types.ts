export interface ThemeProps {
  mode: string;
  toggle(): void;
}

export interface ContextProps {
  handleClick: (event: React.MouseEvent) => void;
  handlePostClick: (event: React.MouseEvent) => void;
  showPostModal: boolean;
  color: string;
  numberMails: number;
  numberIconDisplayState: boolean;
  numberIconNums: { mails: number; notifications: number };
}

export interface IconProps {
  color: string;
  dropShadow: boolean;
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


