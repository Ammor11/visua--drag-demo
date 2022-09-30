export function getShapeStyle(style) {
  const result = {};
  ["width", "height", "top", "left", "rotate"].forEach((attr) => {
    if (attr != "rotate") {
      if ((style[attr] + "").indexOf("px") >= 0) {
        result[attr] = style[attr];
      } else {
        result[attr] = style[attr] + "px";
      }
    } else {
      result.transform = "rotate(" + style[attr] + "deg)";
    }
  });
  console.log(result);
  return result;
}
