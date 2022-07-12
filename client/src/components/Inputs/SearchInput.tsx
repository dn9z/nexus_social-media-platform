import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Search from "../../icons/Search";



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
interface SearchInputProps {
  placeholder: string;
  searchValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> 
}

const NewMessage_Search: React.FC<SearchInputProps> = (props) => {
  const context = React.useContext(Context);
    const theme = useTheme();
  return (
   
          
          <Prompt>
            <SearchInput
            onChange={props.onChange} 
            value={props.searchValue}
            placeholder={props.placeholder} />
            <IconContainer>
              <Search
                
                dropShadow={false}
                scaleFactor={0.65}
                color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
              />
            </IconContainer>
          </Prompt>
       
  )
}

export default NewMessage_Search