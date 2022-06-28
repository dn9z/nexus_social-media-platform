import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import Search from "../../../icons/Search";
import NewMessage from "../../../icons/NewMessage";

const SearchContainer = styled.div`
  height: 20%;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
`;
const NewMessageContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & > p {
    font-family: Zilla;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const Prompt = styled.div`
  width: 100%;

  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  all: unset;
  width: 50%;
  padding: 1rem;
  border: 1px solid grey;
  resize: none;

  border-radius: 25px;

  overflow: hidden;

  font-family: Zilla;
  font-size: 1rem;
`;



const NewMessage_Search: React.FC= () => {
    const theme = useTheme();
  return (
    <SearchContainer>
          <NewMessageContainer>
            <p>Messages</p>{" "}
            <IconContainer>
              <NewMessage
                dropShadow={false}
                scaleFactor={0.65}
                color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
              />
            </IconContainer>
          </NewMessageContainer>
          <Prompt>
            <SearchInput placeholder="Search messages" />
            <IconContainer>
              <Search
                dropShadow={false}
                scaleFactor={0.65}
                color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
              />
            </IconContainer>
          </Prompt>
        </SearchContainer>
  )
}

export default NewMessage_Search