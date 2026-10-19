const forma = document.getElementById("formaRegistracii");

const fio = document.getElementById("fio");
const telefon = document.getElementById("telefon");
const pochta = document.getElementById("pochta");
const rezultat = document.getElementById("rezultat");

const oshibkaFio = document.getElementById("oshibkaFio");
const oshibkaTelefon = document.getElementById("oshibkaTelefon");
const oshibkaPochta = document.getElementById("oshibkaPochta");

const regExpFio = /^[А-ЯЁа-яё]+(?:-[А-ЯЁа-яё]+)?(?:\s+[А-ЯЁа-яё]+(?:-[А-ЯЁа-яё]+)?){1,2}$/;
const regExpTelefon = /^\+996\d{9}$/;
const regExpPochta = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function proveritFio() {
    if (!regExpFio.test(fio.value.trim())) {
        oshibkaFio.textContent = "Введите фамилию, имя и отчество.";
        return false;
    }

    oshibkaFio.textContent = "";
    return true;
}

function proveritTelefon() {
    if (!regExpTelefon.test(telefon.value.trim())) {
        oshibkaTelefon.textContent = "Введите номер в формате +996555123456.";
        return false;
    }

    oshibkaTelefon.textContent = "";
    return true;
}

function proveritPochta() {
    if (!regExpPochta.test(pochta.value.trim())) {
        oshibkaPochta.textContent = "Введите правильную электронную почту.";
        return false;
    }

    oshibkaPochta.textContent = "";
    return true;
}

fio.addEventListener("input", proveritFio);
telefon.addEventListener("input", proveritTelefon);
pochta.addEventListener("input", proveritPochta);

forma.addEventListener("submit", function(event) {
    event.preventDefault();

    const fioOk = proveritFio();
    const telefonOk = proveritTelefon();
    const pochtaOk = proveritPochta();

    if (fioOk && telefonOk && pochtaOk) {
        rezultat.textContent = "Регистрация пройдена успешно!";
        rezultat.className = "uspeshno";
    } else {
        rezultat.textContent = "Исправьте ошибки в форме.";
        rezultat.className = "";
    }
});
