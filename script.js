const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const total = document.getElementById("total");

let jumlah = 0;

button.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const edit = document.createElement("button");
    edit.textContent = "Edit";

    const hapus = document.createElement("button");
    hapus.textContent = "Hapus";

    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(hapus);

    list.appendChild(li);

    jumlah++;
    total.textContent = jumlah;

    input.value = "";

    span.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    });

    edit.addEventListener("click", function () {
        const baru = prompt("Edit tugas:", span.textContent);

        if (baru && baru.trim() !== "") {
            span.textContent = baru;
        }
    });

    hapus.addEventListener("click", function () {
        li.remove();
        jumlah--;
        total.textContent = jumlah;
    });
});
