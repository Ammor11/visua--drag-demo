export const componentList = [
  {
    component: "VText",
    label: "文字",
    propValue: "双击编辑文字",
    request: {
      method: "GET",
      data: [],
      url: "",
      series: false, // 是否定时发送请求
      time: 1000, // 定时更新时间
      paramType: "", // string object array
      requestCount: 0, // 请求次数限制，0 为无限
    },
    style: {
      width: 200,
      height: 28,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      position: "absolute",
      left: "",
      top: "",
    },
  },
  {
    component: "Picture",
    label: "图片",
    icon: "tupian",
    propValue: {
      url: require("../assets/test.jpg"),
      flip: {
        horizontal: false,
        vertical: false,
      },
    },
    style: {
      width: 300,
      height: 200,
      borderRadius: "",
      position: "absolute",
      left: "",
      top: "",
    },
  },
];
