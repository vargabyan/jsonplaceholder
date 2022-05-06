import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { TableGridStyle, Button } from "./indexStyle";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { setData, setrememberData } from "../../store/reducer";
import { useParams } from "react-router-dom";

const request = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const jsonParse = JSON.parse(xhr.response);
        resolve(jsonParse);
      } else {
        reject({ message: xhr.responseText });
      }
    };

    xhr.open("Get", url, true);
    xhr.onload = onload;
    xhr.send();
  });
};

function TableList({ data }) {
  const cellCountInOnePage = useSelector((store) => store.cellCountInOnePage);
  const { page } = useParams();
  const twoVelueSlice = +page * cellCountInOnePage;
  const oneVelueSlice = twoVelueSlice - cellCountInOnePage;

  return data.slice(oneVelueSlice, twoVelueSlice).map((index) => {
    return (
      <Row key={`tableList_${index.id}`}>
        <Col span={2}>
          <Row className="listRow" align="middle" justify="center">
            <Col>{index.id}</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row className="listRow" align="middle">
            <Col>{index.title}</Col>
          </Row>
        </Col>
        <Col span={10}>
          <Row className="listRow" align="middle">
            <Col>{index.body}</Col>
          </Row>
        </Col>
      </Row>
    );
  });
}

function TableGrid() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const sortData = (e) => {
    const newArr = data.map((index) => index);
    let sorting = [];

    if (e === "id") {
      sorting = newArr.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (e === "title") {
      sorting = newArr.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    }

    if (e === "body") {
      sorting = newArr.sort(function (a, b) {
        if (a.body > b.body) {
          return 1;
        }
        if (a.body < b.body) {
          return -1;
        }
        return 0;
      });
    }

    dispatch(setData(sorting));
  };

  useEffect(() => {
    request("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        dispatch(setData(result));
        dispatch(setrememberData(result));
      })
      .catch((err) => console.log(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableGridStyle>
      <Row>
        <Col span={2}>
          <Row className="headerRow" align="middle">
            <Col offset={4}>
              <Button className="id" onClick={() => sortData("id")}>
                <p>ID</p>
                <div>
                  <AiOutlineDown />
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row className="headerRow" align="middle">
            <Col offset={6}>
              <Button className="title" onClick={() => sortData("title")}>
                <p>Заголовок</p>
                <div>
                  <AiOutlineDown />
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Row className="headerRow" align="middle">
            <Col offset={6}>
              <Button className="body" onClick={() => sortData("body")}>
                <p>Описание</p>
                <div>
                  <AiOutlineDown />
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <TableList data={data} />
      <Pagination />
    </TableGridStyle>
  );
}

export default TableGrid;
