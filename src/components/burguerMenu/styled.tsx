import styled from "styled-components";

export const DivContainer = styled.div<{ showMenu: boolean }>`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  flex-direction: column;
  margin-top: 10px
`;

export const StyledLink = styled.li`
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;