"use strict";
const styles = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  id: "table-data-wrap",
};
// const divDom = $("table-data-wrap");
const divDom = window.Colin.$("table-data-wrap");
const tableDome = window.Colin.createEl("table"); //creatElement 创建dom对象
tableDome.width = "100%"; //setAttribute 设置属性
window.Colin.setAttr(tableDome, styles);
//array
let theadHtml = `<thead><tr>`;
tableTheadData.forEach(function (item) {
  //检测是否存在width
  let width = item.width ? ` width="${item.width}"` : "";
  theadHtml += `<th${width}>${item.label}</th>`;
});
theadHtml += `</tr></thead>`;
/**
 * 表格内容
 */
let tbodyHtml = `<tbody>`;
tbodyHtml += createTbodyDate();
tbodyHtml += `</tbody>`;
tableDome.innerHTML = theadHtml + tbodyHtml;
console.log(theadHtml);
divDom.appendChild(tableDome);