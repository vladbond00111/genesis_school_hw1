import styled from "vue-styled-components";
const themeProps = {lightTheme: Boolean}

export const StyledApp = styled("div", themeProps)`
  color: ${(props) => (props.lightTheme ? "black" : "white")};
  background-color: ${(props) => (props.lightTheme ? "white" : "#333333")};
  a {  
    font-weight: bold;
    color: ${(props) => (props.lightTheme ? "#2c3e50" : "blue")};
  }
  label {
    color: ${(props) => (props.lightTheme ? "black" : "white") + '!important'};
  }
  .v-input--switch__track {
    background-color: ${(props) => (props.lightTheme ? "black" : "white")};
  }
`;