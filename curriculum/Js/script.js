"use strict";
console.log("success");
/**
 * 获取id的dom元素
 * @param {string} id
 */
function $(id) {
  if (typeof id == "string") {
    const dom = document.getElementById(id);
    if (!dom) {
      throw new Error("未找到指定dom对象");
    } else {
      return dom;
    }
  } else {
    throw new Errow("参数id必须为字符串类型");
  }
}
/**
 *
 * @param {string} node
 */
function createEl(node) {
  return document.createElement(node);
}
/**
 * setattribute 每次只有能赋值一个 需要通过遍历来
 * @param {dom对象} node
 * @param {json} styles
 */
function setAttr(node, styles) {
  for (let key in styles) {
    node.setAttribute(key, styles[key]);
  }
}
/**
 * 获取dom对象的属性
 * @param {dom} node
 * @param {string} attr
 */
function getAttr(node, attr) {
  return node.getAttribute(attr);
}

const styles = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  id: "table-data-wrap",
};
// console.log();
const divDom = $("table-data-wrap");
const tableDome = createEl("table"); //creatElement 创建dom对象
tableDome.width = "100%"; //setAttribute 设置属性
setAttr(tableDome, styles);
tableDome.innerHTML = `<thead>
                        <tr>
                        <th>头像</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>手机号</th>
                        <th>国籍</th>
                        <th width="200">爱好</th>
                        <th>头衔</th>
                        <th>操作</th>
                        </tr>
                      </thead>`;

divDom.appendChild(tableDome);
console.log(tableDome);
function setA(a, b) {
  return setAttribute(a, b);
}
