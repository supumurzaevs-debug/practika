let user =[
    {
    login: "user1111",
    password: "1111",
    name: "maksim chelovek"
    },
    {
    login: "job123",
    password: "1123",
    name: "employer atai"
    },
    {
    login: "student777",
    password: "0000",
    name: "student nursultan"
    },
    {
    login: "jason statham",
    password: "1087",
    name: "hollywood citatnik"
    },
    {
    login: "gamer",
    password: "4566",
    name: "player"
    },
    {
    login: "ronaldo",
    password: "0007",
    name: "suiii"
    },
    {
    login: "gambler",
    password: "7777",
    name: "addicted guy"
    }
];

let loginInput = document.querySelector('#loginInput');
let passwordInput = document.querySelector('#passwordInput');
let loginButton = document.querySelector('#loginButton');
let resultMessage = document.querySelector('#resultMessage'); 


let loginUser = () => {

    let currentLogin = loginInput.value;
    let currentPassword = passwordInput.value;

    let foundUser = user.find(element => element.login === currentLogin && element.password === currentPassword);

    // Проверяем результат
    if (foundUser) {
        resultMessage.textContent = `Добро пожаловать, ${foundUser.name}! Авторизация успешна.`;
    } else {
        resultMessage.textContent = "Ошибка! Неверный логин или пароль.";
    }


    loginInput.value = "";
    passwordInput.value = "";
};


loginButton.addEventListener('click', loginUser);