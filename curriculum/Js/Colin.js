(function () {
  "use strict";
  if (!window.Colin) {
    window.Colin = {};
  }
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
  window.Colin.$ = $;
  /**
   *
   * @param {string} node
   */
  function createEl(node) {
    return document.createElement(node);
  }
  window.Colin.createEl = createEl;
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
  window.Colin.setAttr = setAttr;
  /**
   * 获取dom对象的属性
   * @param {dom} node
   * @param {string} attr
   */
  function getAttr(node, attr) {
    return node.getAttribute(attr);
  }
  window.Colin.getAttr = getAttr;
})()

//作用域：作用域外部是无法范文作业与内部的一些方法与变量
//自动执行函数，第一：防止变量和方法，不会对全局环境造成污染；