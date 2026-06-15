import React from "react";
import { Context } from "..";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
