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
}
