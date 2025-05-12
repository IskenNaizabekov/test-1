// Задание 1
const containsOnlyDigits = str => /^\d+$/.test(str);

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// Задание 2
let secCounter = 1;
setInterval(() => {
    console.log("Прошла секунда");
    secCounter++;
}, 1000);

// Задание 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) clearInterval(interval);
    }, 1000);
};
count();

// Задание 4
const box = document.getElementById("colorBox");
box.addEventListener("click", () => {
    box.classList.toggle("active");
});

// Задание 5
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data/data.json", true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log("Полученные данные:", data);
        } else {
            console.error("Ошибка запроса:", xhr.status);
        }
    };

    xhr.send();
};

getData();
