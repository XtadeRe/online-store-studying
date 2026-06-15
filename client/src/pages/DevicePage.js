import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12",
    img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
    rating: 0,
    price: 5000,
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Процессор", description: "A14 Bionic" },
    { id: 3, title: "Экран", description: "6.1 дюймов" },
    { id: 4, title: "Камера", description: "12 МП" },
    { id: 5, title: "Аккумулятор", description: "2815 мАч" },
  ];

  return (
    <Container className="mt-4">
      <Row className="align-items-start">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={device.img}
            className="mb-3"
            style={{ objectFit: "cover" }}
          />
        </Col>

        <Col md={4}>
          <div>
            <h2 className="mb-3">{device.name}</h2>
            <div className="d-flex align-items-center">
              <span className="fs-4 me-2">{device.rating}</span>
              <FaStar size={24} color="#FFD700" />
            </div>
            <div className="mt-4">
              <h3 className="mb-4">{device.price} ₽</h3>
              <Button variant="outline-dark" size="lg">
                Добавить в корзину
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3 className="mb-3">Характеристики:</h3>
          {description.map((info, index) => (
            <Row
              key={info.id}
              style={{
                background: index % 2 === 0 ? "#f8f9fa" : "transparent",
                padding: "12px 10px",
                margin: 0,
              }}
              className="align-items-center"
            >
              <Col md={3}>
                <strong>{info.title}:</strong>
              </Col>
              <Col md={9}>{info.description}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
