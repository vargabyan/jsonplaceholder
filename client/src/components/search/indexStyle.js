import styled from "styled-components";

export const SearchStyle = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  border: solid 1px black;
  padding-right: 15px;
  padding-left: 15px;
  background: #5a5c66;
  color: white;
  margin-top: 23px;

  div {
    margin-top: 14px;
    padding-right: 2px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    background: unset;

    ::placeholder {
      color: #b3b7bf;
    }
  }
`;
