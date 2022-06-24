import { Row, Card, Col, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "../index.css";
import { Context } from "../index";

const Footer = () => {
  return (
    <Container className="footer" color="light" fluid>
      <Row className="h-100">
        {/* <Col sm>
          <Link color="#8d8d8d">Корзина</Link>
        </Col> */}
        <Col
          sm
          color="light"
          className="pb-2 justify-content-center align-items-end"
        >
          Все права приндалежат Сергею Толмачеву a.k.a Sergerus
        </Col>
        {/* <Col sm>
          <Link color="#8d8d8d">sm=true</Link>
        </Col> */}
      </Row>
    </Container>
  );
};
export default Footer;
