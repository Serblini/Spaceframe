import React from "react";
import { Card, ListGroup, Button, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { deleteBasketDevices } from "../http/basketAPI";
// import { DEVICE_ROUTE } from "../utils/consts";

const BasketItem = ({ device }) => {
  const deleteBasketDevice = () => {
    console.log(device.id);
    deleteBasketDevices(device.id)
      .then((data) => console.log(data))
      .catch((err) => console.log(`err: ${err}`));
  };

  return (
    <ListGroup.Item md={3} className={"mt-3 d-flex"}>
      <Image
        width={150}
        height={150}
        src={process.env.REACT_APP_API_URL + device.img}
      />

      <div
        className="d-inline mL-10"
        style={{ width: 274, "font-size": "20px", marginLeft: 20 }}
      >
        {device.name}
        <div
          className="d-flex"
          style={{
            "font-size": "20px",
            color: "#145472",
            fontWeight: "bolder",
          }}
        >
          {device.price}₽
        </div>
      </div>

      <Button
        variant="outline-dark"
        // size="sm"
        className="d-flex h-100 w-10 p-sticky"
        style={{ position: "sticky", left: "80%", width: "auto", top: "55%" }}
        block
        onClick={deleteBasketDevice}
      >
        Убрать из корзины
      </Button>
    </ListGroup.Item>
  );
};

export default BasketItem;
