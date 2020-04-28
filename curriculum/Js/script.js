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
// tableDome.innerHTML = `<thead>
//                         <tr>
//                         <th>头像</th>
//                         <th>姓名</th>
//                         <th>性别</th>
//                         <th>年龄</th>
//                         <th>手机号</th>
//                         <th>国籍</th>
//                         <th width="200">爱好</th>
//                         <th>头衔</th>
//                         <th>操作</th>
//                         </tr>
//                       </thead>`;


// console.log(tableDome);
//array
const tableTheadData = [{
    label: "头像"
  },
  {
    label: "姓名"
  },
  {
    label: "性别"
  },
  {
    label: "年龄"
  },
  {
    label: "手机号"
  },
  {
    label: "国籍"
  },
  {
    label: "爱好",
    width: 200,
  },
  {
    label: "头衔"
  },
  {
    label: "操作"
  },
];

let theadHtml = `<thead><tr>`;
tableTheadData.forEach(function (item) {
  //检测是否存在width
  let width = item.width ? ` width="${item.width}"` : '';
  theadHtml += `<th${width}>${item.label}</th>`
});
theadHtml += `</tr></thead>`;
tableDome.innerHTML = theadHtml;
console.log(theadHtml);
divDom.appendChild(tableDome);