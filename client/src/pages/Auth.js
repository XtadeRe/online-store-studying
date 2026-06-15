import React, { useContext } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userAPI";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 400 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Вход" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введите ваш Email"
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            type="password"
            placeholder="Введите ваш пароль"
          />

          <div className="d-flex flex-column align-items-center mt-3">
            {isLogin ? (
              <NavLink to={REGISTRATION_ROUTE}>Нет аккаунта?</NavLink>
            ) : (
              <NavLink to={LOGIN_ROUTE}>Уже есть аккаунт?</NavLink>
            )}
            <Button
              onClick={() => signIn()}
              className="mt-3 w-100"
              variant="outline-success"
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
