let i = 0;

const list = document.createElement("ul");
list.classList.add("list");
document.body.appendChild(list);

const input = document.createElement("input");
input.classList.add("input");
document.body.appendChild(input);

const inputBtn = document.createElement("button");
inputBtn.innerHTML = "Add";
inputBtn.style.marginLeft = "10px";
inputBtn.classList.add("inputBtn");
document.body.appendChild(inputBtn);

inputBtn.addEventListener("click", function () {
  i++;

  const task = document.createElement("li");
  task.classList.add(`task${i}`);
  const inputValue = input.value;
  input.value = "";
  task.innerHTML = inputValue;
  document.querySelector(".list").appendChild(task);

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.style.marginLeft = "10px";
  task.appendChild(delBtn);

  delBtn.addEventListener("click", function () {
    list.removeChild(task);
  });
});
