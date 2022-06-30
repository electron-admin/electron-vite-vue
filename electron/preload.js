/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-03-08 12:30:46
 * @LastEditTime: 2022-03-08 12:30:46
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vue3\preload.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ2: 大前端QQ交流群2: 777642000
 * @公众账号: 乐编码
 * 善始者实繁 , 克终者盖寡
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
// preload.js

// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
