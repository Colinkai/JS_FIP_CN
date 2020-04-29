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
let theadHtml = `<thead><tr>`;
tableTheadData.forEach(function (item) {
  //检测是否存在width
  let width = item.width ? ` width="${item.width}"` : '';
  theadHtml += `<th${width}>${item.label}</th>`
});
theadHtml += `</tr></thead>`;
/**
 * 表格内容
 */
let tbodyHtml = `<tbody>`;
let trHtml = ``;
for (let i = 0; i < tableBodyData.length; i++) { //块级作用域,及大括号内，子级作用域，花括号外 父级作用域。
  const data = tableBodyData[i];
  //开始tr
  trHtml += `<tr>`;
  //头像
  trHtml += `<td>
                <div class="face">
                    <span class="gender icon-${data.face.gender}"></span>
                    <img src="${data.face.img}" alt="">
                </div>
              </td>`;
  //姓名
  trHtml += `<td>
              <div class="people-name">
                  <h4 class="name">${data.name.trueName}</h4>
                  <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
              </div>
            </td>`;
  //性别
  trHtml += `<td>
              <div class="gender-wrap">
                  <span class="gender icon-girl ${data.face.gender==='girl'?'':'option-05'}"></span>
                  <span class="gender icon-boy ${data.face.gender==='boy'?'':'option-05'}"></span>
              </div>
            </td>`;
  //年龄
  trHtml += `<td>
  <div class="age text-center">
      <p>${data.age.number}</p>
      <span class="option-05 fs-12">（单身狗）</span>
  </div>
</td>`;
  //手机号
  trHtml += `<td>
  <div class="phone">
      ${data.phone.code}<span class="option-05">（中国）</span><br />
      ${data.phone.numbe}
  </div>
</td>`;
  //国籍
  trHtml += `<td>
              <div>
                  <img src="${data.country.National_flag}" alt="${data.country.name}">
                  <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
              </div>
            </td>`;
  //爱好
  let likeHtml = ``;
  data.like.forEach(item => {
    likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`
  });
  trHtml += `<td><div class="likes">${likeHtml}</div></td>`;
  //头衔
  trHtml += `<td>
  <div class="grade">
      <span class="role-name">${data.rank.name}</span>
      <div class="grade-wrap icon-grade">
          <div class="grade-high icon-grade" style="width: ${data.rank.lever*16}%;"></div>
      </div>
  </div>
</td>`;
  //操作
  trHtml += `<td>
  <div class="operation">
      <a href="javascript: void(0);" class="operation-btn">设置</a>
      <ul class="links">
          <a href="javascript: void(0);">编辑</a>
          <a href="javascript: void(0);">删除</a>
          <a href="javascript: void(0);">锁定</a>
          <a href="javascript: void(0);">收起</a>
      </ul>
  </div>
</td>`;
  //结束tr          
  trHtml += `</tr>`;

}
tbodyHtml += trHtml;
tbodyHtml += `</tbody>`;
tableDome.innerHTML = theadHtml + tbodyHtml;
console.log(theadHtml);
divDom.appendChild(tableDome);