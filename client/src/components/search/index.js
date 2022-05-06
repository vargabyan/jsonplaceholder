import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { SearchStyle } from "./indexStyle";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/reducer";
import { useNavigate } from "react-router-dom";

function Search() {
  const rememberData = useSelector((store) => store.rememberData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangek = (e) => {
    const {
      target: { value },
    } = e;
    if (value === "") {
      dispatch(setData(rememberData));
    }

    const filtering = rememberData.filter((index) => {
      const reg = new RegExp(`${value}`);
      const resultId = reg.test(index.id.toString());
      const resultTitle = reg.test(index.title.toString());
      const resultBody = reg.test(index.body.toString());

      return resultId || resultTitle || resultBody;
    });

    dispatch(setData(filtering));
    navigate("/1");
  };

  return (
    <Row>
      <Col span={13}>
        <SearchStyle>
          <input placeholder="Поиск" onChange={onChangek} />
          <div>
            <FiSearch size="20" />
          </div>
        </SearchStyle>
      </Col>
    </Row>
  );
}

export default Search;
