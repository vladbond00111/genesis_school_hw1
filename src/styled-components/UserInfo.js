import styled from "vue-styled-components";
const themeProps = {lightTheme: Boolean}

export const StyledUserInfo = styled("div", themeProps)`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.lightTheme ? "black" : "white")};
  background-color: ${(props) => (props.lightTheme ? "white" : "black")};
  .user-nickname {
    color: ${(props) => (props.lightTheme ? "black" : "white")};
  }  
  .user-signature {
    color: ${(props) => (props.lightTheme ? "#333333" : "#eeeeee")};
    font-size: 14px;
    font-weight: normal;
  }
`;