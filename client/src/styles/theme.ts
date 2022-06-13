import theme from 'styled-theming';

export const backgroundColor: theme.ThemeSet = theme('mode', {
    light: '#f8f8ff',
    dark: '#0e0f11'
  });

  export const fontColor: theme.ThemeSet = theme('mode', {
    light: '#0e0f11',
    dark: '#f8f8ff'
  });

  export const menuItemHoverColor: theme.ThemeSet = theme('mode', {
    light: '#d8d8d8',
    dark: '#6c7a86'
  });
/* 
export const lightTheme = {
    fontColor: "black",
    backgroundColor: "#f8f8ff",
    menuItemHoverColor:"#d8d8d8"
}

export const darkTheme = {
    fontColor: "#f8f8ff",
    backgroundColor: "black",
    menuItemHoverColor:"#6c7a86"
} */