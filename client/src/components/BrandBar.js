import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand?.id ? "danger" : "light"}
          onClick={() => {
            device.setSelectedBrand(brand);
            device.setPage(1);
          }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
