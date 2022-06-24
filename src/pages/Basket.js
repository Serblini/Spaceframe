import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { Button, Container, Card, Row, ListGroup } from "react-bootstrap";
import BasketList from "../components/BasketList";
import { fetchBasket, setBasketDevices } from "../http/basketAPI";

const Basket = observer(() => {
  const { device } = useContext(Context);
  const [basketTotalCount, setTotalCount] = useState([]);
  useEffect(() => {
    fetchBasket().then((data) => {
      device.setBasketDevices(data);
      setTotalCount(data.reduce((total, item) => item.price + total, 0));
    });
  }, []);

  return (
    <Container style={{ marginBottom: 700 }}>
      <BasketList>
        <ListGroup.Item
          md={3}
          className={"mt-3 d-flex"}
          style={{ fontSize: "25px" }}
        >
          Сумма товаров:
          <p style={{ color: "#145472", fontWeight: "bolder" }}>
            {basketTotalCount} ₽
          </p>
          {basketTotalCount === 0 ? (
            <Card style={{ position: "sticky", left: "90%", paddingTop: 6 }}>
              Добавьте больше товара!
            </Card>
          ) : (
            <Button
              variant={"outline-success"}
              style={{ position: "sticky", left: "90%" }}
            >
              Офоромить заказ
            </Button>
          )}
        </ListGroup.Item>
      </BasketList>
      <Card></Card>
    </Container>
  );
});

export default Basket;
