import React, { useContext } from "react";
import { Context } from "..";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };

  return (
    <Navbar expand="lg" bg="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={SHOP_ROUTE}
        >
          Buy_Devices
        </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          {user.isAuth ? (
            <Nav className="ms-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-primary"}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
              <Button
                variant={"outline-danger"}
                className="ms-2"
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ms-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-primary"}
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Вход
              </Button>
              <Button variant={"outline-secondary"} className="ms-2">
                Регистрация
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
