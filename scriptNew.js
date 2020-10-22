const employers = [
    "АртеМ",
    "максим",
    "Владимир",
    "сергей",
    "НикиТа",
    "евГений",
    " Дарья",
    " ",
    "виктория ",
    "ЕкаТерина",
    "",
    " Андрей ",
    "КИРИЛЛ",
];
const nameCourse = "Базовый React";
const command = [];

for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0 && employers[i].trim() != "") {
        let employer = employers[i].toLowerCase().trim();
        employer = employer[0].toUpperCase() + employer.slice(1);
        command.push(employer);
    }
}

const data = {
    cash: [3, 8, 3],
    react: ["JSX", "components", "props", "state", "hooks"],
    add: ["styled-components", "firebase"],
};

const calcCash = ({ cash = 0 }) => {
    let total = 0;
    for (let i = 0; i < cash.length; i++) {
        total += cash[i];
    }
    return total;
};

const lesson = calcCash(data);

const makeBusiness = ([
    director,
    teacher = "Максим",
    allModule,
    gang,
    course,
]) => {
    const { react, add } = data;
    const sumTech = [...react, ...add, "и другие"].join(" ");

    console.log(
        `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое что изучим будет ${react[0]}. Он очень похож на HTML!
Технологии которые мы изучим: ${sumTech}`
    );
};

makeBusiness(["Артем", , lesson, command, nameCourse]);
