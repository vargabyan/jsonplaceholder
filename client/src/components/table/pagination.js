import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { PaginationStyle, Button, LinkPageNumberStyle } from "./indexStyle";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function PageNumber() {
  const cellCountInOnePage = useSelector((state) => state.cellCountInOnePage);
  const data = useSelector((state) => state.data);
  const pageNumber = data.length / cellCountInOnePage;
  const result = [];
  const { page } = useParams();

  for (let i = 1; i <= pageNumber; i++) {
    result.push(
      <LinkPageNumberStyle
        page={page === i.toString() ? "true" : "false"}
        to={`/${i}`}
        key={`pageNumber_${i}`}
      >
        {i}
      </LinkPageNumberStyle>
    );
  }

  return result;
}

function Pagination() {
  const cellCountInOnePage = useSelector((state) => state.cellCountInOnePage);
  const data = useSelector((state) => state.data);
  const pageNumber = data.length / cellCountInOnePage;
  const { page } = useParams();
  let navigate = useNavigate();

  const ClickBack = () => {
    if (+page - 1 >= 1) {
      navigate(`/${+page - 1}`);
    }
  };

  const ClickNext = () => {
    if (+page + 1 <= pageNumber) {
      navigate(`/${+page + 1}`);
    }
  };

  return (
    <PaginationStyle>
      <Row justify="space-around">
        <Col span={7} offset={1}>
          <Row justify="start">
            <Col>
              <Button onClick={ClickBack}>Назад</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="center">
            <Col>
              <PageNumber />
            </Col>
          </Row>
        </Col>
        <Col span={7} pull={1}>
          <Row justify="end">
            <Col>
              <Button onClick={ClickNext}>Далее</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </PaginationStyle>
  );
}

export default Pagination;
