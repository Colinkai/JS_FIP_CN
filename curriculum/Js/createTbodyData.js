/**
 * 生成表格数据主体封装
 */
function createTbodyDate() {
  let trHtml = ``;
  for (let i = 0; i < tableBodyData.length; i++) {
    //块级作用域,及大括号内，子级作用域，花括号外 父级作用域。
    const data = tableBodyData[i];
    //开始tr
    trHtml += `<tr>`;
    //头像
    trHtml += createFace(data.face);
    //姓名
    trHtml += createName(data.name);
    //性别
    trHtml += createSex(data.face);
    //年龄
    trHtml += createAge(data.age);
    //手机号
    trHtml += createPhone(data.phone);
    //国籍
    trHtml += createContry(data.country);
    //爱好
    trHtml += createLike(data.like);
    //头衔
    trHtml += createRank(data.rank);
    //操作
    trHtml += createOperation();
    //结束tr
    trHtml += `</tr>`;
  }
  return trHtml
}
/**
 * 头像
 * @param {arr}} data 表格数据数组
 */
function createFace(data) {
  let html = `<td>
                <div class="face">
                    <span class="gender icon-${data.gender}"></span>
                    <img src="${data.img}" alt="">
                </div>
              </td>`;
  return html;
}
/**
 * 姓名
 * @param {arr}} data 表格数据数组
 */
function createName(data) {
  let html = `<td>
              <div class="people-name">
                  <h4 class="name">${data.trueName}</h4>
                  <span class="nickname option-05 fs-12">昵称：${data.nickname}</span>
              </div>
            </td>`;
  return html;
}
/**
 * 性别
 * @param {arr}} data 表格数据数组
 */
function createSex(data) {
  let html = `<td>
                <div class="gender-wrap">
                    <span class="gender icon-girl ${
                      data.gender === "girl" ? "" : "option-05"
                    }"></span>
                    <span class="gender icon-boy ${
                      data.gender === "boy" ? "" : "option-05"
                    }"></span>
                </div>
              </td>`;
  return html;
}
/**
 * 年龄
 * @param {arr}} data 表格数据数组
 */
function createAge(data) {
  let html = `<td>
                <div class="age text-center">
                    <p>${data.number}</p>
                    <span class="option-05 fs-12">（单身狗）</span>
                </div>
              </td>`;
  return html;
}
/**
 * 手机号
 * @param {arr}} data 表格数据数组
 */
function createPhone(data) {
  let html = `<td>
                <div class="phone">
                    ${data.code}<span class="option-05">（中国）</span><br />
                    ${data.numbe}
                </div>
              </td>`;
  return html;
}
/**
 * 国籍
 * @param {arr}} data 表格数据数组
 */
function createContry(data) {
  let html = `<td>
                <div>
                    <img src="${data.National_flag}" alt="${data.name}">
                    <p class="country-name" style="color: ${data.color};">${data.name}</p>
                </div>
              </td>`;
  return html;
}
/**
 * 爱好
 * @param {arr}} data 表格数据数组
 */
function createLike(data) {
  let likeHtml = ``;
  data.forEach((item) => {
    likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`;
  });
  let html = `<td><div class="likes">${likeHtml}</div></td>`;
  return html;
}
/**
 * 头衔
 * @param {arr}} data 表格数据数组
 */
function createRank(data) {
  let html = `<td>
                <div class="grade">
                    <span class="role-name">${data.name}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width: ${
                          data.lever * 16
                        }%;"></div>
                    </div>
                </div>
              </td>`;
  return html;
}
/**
 * 操作
 * @param {arr}} data 表格数据数组
 */
function createOperation() {
  let html = `<td>
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
  return html;
}