import React, { useEffect, useState } from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-4">
      <Row className="align-items-start">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
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
          {device.info.map((info, index) => (
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
