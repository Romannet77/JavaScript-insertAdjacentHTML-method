// const ulWithExistingHtml = document.querySelector(".ul-existing-html");
const ul = document.querySelector(".ul-insert-html-example");
const ulAfterbegin = document.querySelector(".ul-afterbegin");
const ulBeforeend = document.querySelector(".ul-beforeend");
const ulBeforebegin = document.querySelector(".ul-beforebegin");
const ulAfterend = document.querySelector(".ul-afterend");

const li = `<li>&lt;li&gt; element added by <span> JavaScript</span></li>`;

const liAddedByClick = `<li>&lt;li&gt; added by "click" (JavaScript)</li>`;

const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   ul.insertAdjacentHTML("afterbegin", liAddedByClick);
// });

// ulWithExistingHtml.insertAdjacentHTML("afterbegin", li);
ul.insertAdjacentHTML("afterbegin", li);
ulAfterbegin.insertAdjacentHTML("afterbegin", li);
ulBeforeend.insertAdjacentHTML("beforeend", li);
ulBeforebegin.insertAdjacentHTML("beforebegin", li);
ulAfterend.insertAdjacentHTML("afterend", li);

/*

const ul = document.querySelector(".ul-insert-html-example");

const li = `<li>&lt;li&gt; element added by <span> JavaScript</span></li>`;

ul.insertAdjacentHTML("afterbegin", li);*/
