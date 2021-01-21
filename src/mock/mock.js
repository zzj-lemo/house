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
