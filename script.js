const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const total = document.getElementById("total");

let jumlah = 0;

button.addEventListener("click", function () {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    });
    const edit = document.createElement("button");
edit.textContent = "Edit";
edit.style.marginLeft = "10px";

edit.addEventListener("click", function () {
    const tugasBaru = prompt("Edit tugas:", li.firstChild.textContent);

    if (tugasBaru !== null && tugasBaru.trim() !== "") {
        li.firstChild.textContent = tugasBaru;
    }
});

    const hapus = document.createElement("button");
    hapus.textContent = "Hapus";
    hapus.style.marginLeft = "10px";

    hapus.addEventListener("click", function () {
        li.remove();
        jumlah--;
        total.textContent = jumlah;
    });

    li.appendChild(edit);
li.appendChild(hapus);
    list.appendChild(li);

    jumlah++;
    total.textContent = jumlah;

    input.value = "";
});
