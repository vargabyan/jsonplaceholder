import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TableGridStyle = styled.div`
  margin-top: 15px;
  font-size: 13px;
  font-weight: 500;

  .headerRow {
    width: 100%;
    height: 54px;
    background: #474955;
    color: white;
  }

  .id {
    display: flex;

    & p {
      margin: 0;
      cursor: pointer;
    }

    & div {
      margin-top: 2px;
      margin-left: 150%;
      cursor: pointer;
    }
  }

  .title {
    display: flex;

    & p {
      margin: 0;
      cursor: pointer;
    }

    & div {
      margin-top: 2px;
      margin-left: 60%;
      cursor: pointer;
    }
  }

  .body {
    display: flex;

    & p {
      margin: 0;
      cursor: pointer;
    }

    & div {
      margin-top: 2px;
      margin-left: 60%;
      cursor: pointer;
    }
  }

  .listRow {
    width: 100%;
    height: 100%;
    border: solid 1px #e3e6ec;

    & div {
      padding: 8px;
    }
  }
`;

export const Button = styled.button`
  background: unset;
  border: none;
`;

export const LinkPageNumberStyle = styled(NavLink)`
  color: unset;
  padding-right: 3px;
  padding-left: 3px;
  display: inline-block;
  color: ${(props) => (props.page === "true" ? "#7EBC3C" : "")};

  :hover {
    color: ${(props) => (props.page === "true" ? "#7EBC3C" : "unset")};
  }
`;

export const PaginationStyle = styled.div`
  margin-top: 15px;
  padding-bottom: 12px;
  font-size: 24px;
  font-weight: 500;

  button {
    cursor: pointer;
  }
`;
