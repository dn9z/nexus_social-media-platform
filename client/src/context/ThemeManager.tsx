import React from "react";
import { ThemeProps } from '../types';

const defaultMode = 'light';

export const ThemeContext: React.Context<ThemeProps> = React.createContext({
  mode: defaultMode,
  toggle: () => { }
});

export const useTheme = () => React.useContext(ThemeContext);

function ThemeProvider(props: React.PropsWithChildren<{}>) {

  const [themeState, setThemeState] = React.useState({
    mode: defaultMode
  });

  const toggle = (): void => {
    setThemeState({ mode: (themeState.mode === 'light' ? `dark` : `light`) });
  }

  return (
    <ThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider