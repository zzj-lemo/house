const Mock = require("mockjs");
const Random = Mock.Random;

const getResource = () => {
  let resources = [
    { title: "新房" },
    { title: "二手房" },
    { title: "租房" },
    { title: "卖房" },
    { title: "转介绍" },
    { title: "计算器" },
    { title: "地图找房" },
    { title: "买卖流程" },
    { title: "房屋估价" },
    { title: "搬家保洁" },
  ];
  let resources1 = resources.map((v) => {
    return { ...v, image: Random.dataImage("30x30", "图标") };
  });
  return resources1;
};
Mock.mock("http://mockjs.com/getResource", "get", getResource());

const getfloorSwiper = () => {
  let resources = [];
  for (let i = 0; i < 10; i++) {
    resources.push({
      "id|+1": 0,
      "type|1": ["hot", "soon"],
      name: Random.cword(4, 8),
      image: Random.dataImage("150x100", "楼盘图"),
      address: Random.city(true),
      area: "74-129㎡",
      price: "388万元/套起",
      time: Random.date(),
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getfloorSwiper", "get", getfloorSwiper());

const getfloorDetail = () => {
  let resources = {
    name: "华樾国际",
    address: Random.city(true),
    area: "74-129㎡",
    price: "388万元/套起",
    time: Random.date(),
    houseType: "3/4室",
    image: [],
  };
  for (let i = 0; i < 3; i++) {
    resources.image.push(Random.dataImage("375x200", "楼盘图"));
  }
  return resources;
};
Mock.mock("http://mockjs.com/getfloorDetail", "get", getfloorDetail());

const getHouseType = () => {
  let resources = [];
  for (let i = 0; i < 2; i++) {
    resources.push({
      houseType: "4室2厅2卫",
      image: Random.dataImage("150x150", "户型图"),
      area: "129㎡",
      price: "售价待定",
      state: "在售",
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getHouseType", "get", getHouseType());

const getFloorDynamic = () => {
  let resources = [];
  for (let i = 0; i < 2; i++) {
    resources.push({
      time: Random.date(),
      state: "楼盘资讯",
      article: Random.cparagraph(3),
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getFloorDynamic", "get", getFloorDynamic());

const getHouseDetails = () => {
  let resources = {
    name: "A户型",
    address: Random.city(true),
    area: "100㎡",
    price: "约260万/套",
    houseType: "住宅",
    direction: "南，北",
    image: Random.dataImage("375x400", "户型图"),
  };
  return resources;
};
Mock.mock("http://mockjs.com/getHouseDetails", "get", getHouseDetails());

const getRealShot = () => {
  let resources = [];
  for (let i = 0; i < 3; i++) {
    resources.push({
      image: Random.dataImage("100x70", "实拍图"),
      title: Random.cparagraph(1),
      icon: Random.dataImage("20x20", "头像"),
      name: Random.cname(),
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getRealShot", "get", getRealShot());

const getCollection = () => {
  let resources = [];
  for (let i = 0; i < 5; i++) {
    resources.push({
      "id|+1": 0,
      "type|1": ["floor", "house"],
      name: Random.cword(4, 8),
      image: Random.dataImage("150x100"),
      price: "388万元/套起",
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getCollection", "get", getCollection());

const getPriceComparison = () => {
  let resources = [];
  for (let i = 0; i < 2; i++) {
    resources.push({
      image: Random.dataImage("100x100","户型图"),
      "houseType|1": ["A户型", "C户型"],
      type: "住宅",
      "price|1": ["约260万/套", "约660万/套"],
      "area|1": ["100㎡","150㎡"],
      direction: "南，北",
      address: "北京。。。",
    });
  }
  return resources;
};
Mock.mock("http://mockjs.com/getPriceComparison", "get", getPriceComparison());