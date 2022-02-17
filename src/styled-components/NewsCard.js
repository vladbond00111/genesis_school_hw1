import styled from "vue-styled-components";
const themeProps = {lightTheme: Boolean}

export const StyledNewsCard = styled("div", themeProps)`
  color: ${(props) => (props.lightTheme ? "#111111" : "#dddddd")};
  background-color: ${(props) => (props.lightTheme ? "#dddddd" : "#111111")};
  .author-name {
    color: ${(props) => (props.lightTheme ? "black" : "white")};
  }
  .v-icon {
    color: ${(props) => (props.lightTheme ? "black" : "white") + '!important'};
  }
`;