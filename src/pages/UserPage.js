import React, { useContext } from "react";
import { Context } from "../index";
import { Form, Row, Container } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const UserPage = () => {
  const { user } = useContext(Context);
  // const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Container
      className="d-flex flex-column"
      style={{ marginTop: 150, height: 800 }}
    >
      <h1
        className="auth__title auth__title--fiol text-center"
        // style={{ textAlign: "center" }}
      >
        Мои данные
      </h1>
      <Row
        className="px-3"
        controlId="exampleForm.ControlInput1"
        style={{ fontSize: 20 }}
      >
        <Form.Label className="font-weight-bold mr-1">Мой Email:</Form.Label>
        <p>{user.user.email}</p>
        {/* <Form.Control className="b-0 bb" type="text" value={user.user.email} readOnly /> */}{" "}
      </Row>

      <Row
        style={{ fontSize: 20 }}
        className="px-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="font-weight-bold mr-1">Моя роль: </Form.Label>
        {/* <Form.Control className="b-0 bb" type="text" value={user.user.nickname} readOnly /> */}{" "}
        {user.user.role === "USER" ? <p> Пользователь</p> : <p> никто</p>}
      </Row>
      <h2
        className="auth__title auth__title--fiol text-center"
        style={{ marginTop: 60 }}
      >
        Функция сброса пароля отключена для аккаунтов вашего типа, пожалуйста
        подтвердите ваш email.
      </h2>
      {/* <Button className="w-100 mt-1 auth-log__btn auth__title" onClick={logOut}>
        Выйти
      </Button> */}
    </Container>
  );
};

export default UserPage;
