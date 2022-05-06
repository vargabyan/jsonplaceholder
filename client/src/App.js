import React from "react";
import Search from "./components/search";
import TableGrid from "./components/table";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Row>
          <Col span={22} offset={1}>
            <Search />
          </Col>
          <Col span={22} offset={1}>
            <Routes>
              <Route path="/" element={<Navigate to="/1" replace />} />
              <Route path="/:page" element={<TableGrid />} />
              <Route path="*" element={<Navigate to="/1" replace />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
