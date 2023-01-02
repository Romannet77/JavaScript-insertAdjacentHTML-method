// const ulWithExistingHtml = document.querySelector(".ul-existing-html");
const ul = document.querySelector(".ul-insert-html-example");
const ulAfterbegin = document.querySelector(".ul-afterbegin");
const ulBeforeend = document.querySelector(".ul-beforeend");
const ulBeforebegin = document.querySelector(".ul-beforebegin");
const ulAfterend = document.querySelector(".ul-afterend");

const li = `<li>&lt;li&gt; element added by <span class = violet-color-text> JavaScript</span></li>`;


ul.insertAdjacentHTML("afterbegin", li);
ulAfterbegin.insertAdjacentHTML("afterbegin", li);
ulBeforeend.insertAdjacentHTML("beforeend", li);
ulBeforebegin.insertAdjacentHTML("beforebegin", li);
ulAfterend.insertAdjacentHTML("afterend", li);

/* adding <li> element by by click on button element  */

const buttonHtmlElement = `<button class="button-add-html-element">Add &lt;li&gt; element</button>`;

const ulParentEl = document.querySelector("ul.parent-element-for-button");

const liAddedByClick = `<li>&lt;li&gt; added by "click" (<span class="red-color-text">JavaScript</span>)</li>`;

ulParentEl.insertAdjacentHTML("beforebegin", buttonHtmlElement);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  ulParentEl.insertAdjacentHTML("afterbegin", liAddedByClick);
});


