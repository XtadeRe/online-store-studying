import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Xiaomi" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12",
        img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
        rating: 0,
      },
      {
        id: 2,
        name: "Galaxy s6",
        img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
        rating: 0,
      },
      {
        id: 3,
        name: "Iphone 15",
        img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
        rating: 0,
      },
      {
        id: 4,
        name: "Galaxy s11",
        img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
        rating: 0,
      },
      {
        id: 5,
        name: "Galaxy s11",
        img: "https://miraphone.ru/upload/resize_cache/iblock/e8f/350_350_2/dpx88m7qpu0afenvus2pigyohw8p9wdu.jpg",
        rating: 0,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
