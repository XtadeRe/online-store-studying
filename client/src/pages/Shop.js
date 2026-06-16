import React, { useContext, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import Pages from "../components/Pages";
import { Context } from "..";
import { fetchTypes, fetchBrands, fetchDevices } from "../http/deviceApi";
import { useSearchParams } from "react-router-dom";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));

    const typeId = searchParams.get("typeId");
    const brandId = searchParams.get("brandId");
    const page = Number(searchParams.get("page") || "1");

    if (page > 0) device.setPage(page);
    if (typeId) device.setSelectedType({ id: Number(typeId) });
    else device.setSelectedType({});

    if (brandId) device.setSelectedBrand({ id: Number(brandId) });
    else device.setSelectedBrand({});
  }, []);

  useEffect(() => {
    const typeId = device.selectedType?.id ?? null;
    const brandId = device.selectedBrand?.id ?? null;

    fetchDevices(typeId, brandId, device.page, device.limit).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [
    device.page,
    device.selectedType?.id,
    device.selectedBrand?.id,
    device.limit,
  ]);

  useEffect(() => {
    const typeId = device.selectedType?.id;
    const brandId = device.selectedBrand?.id;

    const next = new URLSearchParams(searchParams);
    if (typeId) next.set("typeId", String(typeId));
    else next.delete("typeId");

    if (brandId) next.set("brandId", String(brandId));
    else next.delete("brandId");

    next.set("page", String(device.page));
    setSearchParams(next, { replace: true });
  }, [
    device.page,
    device.selectedType?.id,
    device.selectedBrand?.id,
    searchParams,
    setSearchParams,
  ]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
