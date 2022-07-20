import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import Search from "../../../icons/Search";
import NewMessage from "../../../icons/NewMessage";
import SearchInput from "../../Inputs/SearchInput"

const SearchContainer = styled.div`
  height: 25%;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 575px) {
    height: 35%
  }

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



const Button = styled.button`
  all: unset;
`;

const NewMessage_Search: React.FC= () => {
  const context = React.useContext(Context);
    const theme = useTheme();
  return (
    <SearchContainer>
          <NewMessageContainer>
            <p>Messages</p>{" "}
            <IconContainer >
              <Button onClick={()=>context.setShowNewMessageModal(true)}>
                <NewMessage
                  dropShadow={false}
                  scaleFactor={0.65}
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
              </Button>
            </IconContainer>
          </NewMessageContainer>
          
            {/* <SearchInput onClick={()=>{}} searchValue="Search messages" onChange={()=>{}} placeholder="Search messages" /> */}
          
        </SearchContainer>
  )
}

export default NewMessage_Search