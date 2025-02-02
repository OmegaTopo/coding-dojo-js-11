const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
let tasksUl;

function addTask() {
  const reminderList = document.getElementById("reminder-list");
  let hour;
  while (!regex.test(hour)) {
    hour = prompt("Digite a hora escolhida! (hh:mm)");
  }
  const message = prompt("Digite sua mensagem: ");
  document.getElementById("hidden").style.display = "none";
  reminderList.appendChild(createLi(hour, message));
  ordenaData();
}

function createLi(hour, message) {
  const createItem = document.createElement("li");
  createItem.classList.add("reminder-item");
  createItem.classList.add(`date-${date.getFullYear()}${date.getMonth()}`);
  createItem.innerHTML = `
  <div>${message}</div>
  <span class = hora >${hour}</span>
 `;
  createItem.classList;
  return createItem;
}

const date = new Date();

function updateDate() {
  document.getElementById("display-date").innerHTML = date.toLocaleDateString(
    "pt-BR",
    { month: "short", year: "numeric" }
  );

  tasksUl = document.querySelectorAll("#reminder-list li");
  //  aqui
  for (let t = 0; t < tasksUl.length; t++) {
    if (
      tasksUl[t].classList.contains(
        `date-${date.getFullYear()}${date.getMonth()}`
      )
    ) {
      document.getElementById("hidden").style.display = "none";
      tasksUl[t].style.display = "flex";
    } else {
      tasksUl[t].style.display = "none";
      document.getElementById("hidden").style.display = "block";
    }
  }
}

updateDate();

function addMonthInDate() {
  date.setMonth(date.getMonth() + 1);
  updateDate();
}

function minusMonthInDate() {
  date.setMonth(date.getMonth() - 1);
  updateDate();
}

function ordenaData() {
  tasksUl = document.querySelectorAll("#reminder-list li");

  const reminderList = document.getElementById("reminder-list");

  let taskUlArray = Array.from(tasksUl);

  taskUlArray.sort((a, b) => {
    return (
      Number(a.innerText.substr(-5).replace(":", "")) -
      Number(b.innerText.substr(-5).replace(":", ""))
    );
  });

  for (let i of taskUlArray) {
    reminderList.appendChild(i);
  }
}
