export interface ThemeContext {
  mode: string;
  toggle(): void;
}

export interface ContextProps {
  handleClick: (event: React.MouseEvent) => void;
  color: string;
  numberMails: number;
}
