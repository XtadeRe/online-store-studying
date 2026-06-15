import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + `/${device.id}`)}
    >
      <Card
        style={{ cursor: "pointer" }}
        border="3px light"
        className="align-items-center"
      >
        <div>
          <Image width={200} height={200} src={device.img} />
          <p className="mt-4 mb-0">{device.name}</p>
          <p className="text-black-50 mt-2 mb-0">Samsung</p>

          <div className="d-flex align-items-center mt-1">
            <div className="me-1">{device.rating}</div>
            <FaRegStar width={20} height={20} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
