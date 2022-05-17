const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

const people = [
  {
    id: 1,
    fullname: "Mark Otto",
    value: "@mdo",
    time: "17:30:51",
  },
  {
    id: 2,
    fullname: "Jacob Thornton",
    value: "@fat",
    time: "17:30:51",
  },
  {
    id: 3,
    fullname: "Larry Bird",
    value: "@twitter",
    time: "17:30:51",
  },
];

const LoadData = () => {
  people.forEach((obj) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const delBtn = document.createElement("button");

    td1.textContent = obj.id;
    td2.textContent = obj.fullname.split(" ")[0];
    td3.textContent = obj.fullname.split(" ")[1];
    td4.textContent = obj.value;
    td5.textContent = obj.time;
    delBtn.textContent = "X";
    delBtn.style.width = "20px";
    delBtn.style.height = "20px";
    delBtn.style.marginTop = "2px";
    delBtn.style.background = "red";
    delBtn.classList = "delBtn";
    tr.append(td1, td2, td3, td4, td5, delBtn);
    tbody.append(tr);
  });
};

LoadData();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.children[0].children[1].value;
  const value = e.target.children[1].children[1].value;

  people.push({
    id: Math.floor(Math.random() * 14),
    fullname: name,
    value: value,
    time: new Date().toString().split(" ")[4],
  });

  tbody.innerHTML = "";

  people.forEach((obj) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const delBtn = document.createElement("button");

    td1.textContent = obj.id;
    td2.textContent = obj.fullname.split(" ")[0];
    td3.textContent = obj.fullname.split(" ")[1];
    td4.textContent = obj.value;
    td5.textContent = obj.time;
    delBtn.textContent = "X";
    delBtn.classList = "delBtn";
    tr.append(td1, td2, td3, td4, td5, delBtn);
    tbody.append(tr);
  });
});

const editBtn = document.getElementById("edit");

editBtn.addEventListener("click", () => {
  if (editBtn.textContent == "Edit") {
    editBtn.textContent = "Save";
    const allTds = document.querySelectorAll("td");
    allTds.forEach((td) => {
      const newInput = document.createElement("input");
      newInput.value = td.textContent;
      td.textContent = "";
      td.append(newInput);
    });
  } else if (editBtn.textContent == "Save") {
    editBtn.textContent = "Edit";
    const allTds = document.querySelectorAll("td");
    const allInps = document.querySelectorAll("td input");
    allInps.forEach((inp) => {
      console.log(inp);
      const td = inp.parentElement;
      td.textContent = inp.value;
    });
  }
});

const delBtn = document.querySelectorAll("button.delBtn");

delBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.parentElement.remove());
  });
});

console.log(delBtn);

