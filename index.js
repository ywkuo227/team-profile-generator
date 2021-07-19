const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the team manager's ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is the team manager's email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the intern's ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    }
];

const employees = [];

const whatIsNextQuestions = [
    {
        type: "list",
        message: "Which type of team member would you like to add next?",
        name: "typeOfMember",
        choices: ["Engineer", "Intern", "I am done"]
    }
];

const askForEngineerInfo = () => inquirer
    .prompt(engineerQuestions)
    .then((engineerAnswer) => {
        const engineer = new Engineer(engineerAnswer);
        employees.push({
            name: engineer.getName(),
            id: engineer.getId(),
            email: engineer.getEmail(),
            github: engineer.getGitHub(),
            role: engineer.getRole()
        });
        return askWhatsNext();
    })

const askForInternInfo = () => inquirer
    .prompt(internQuestions)
    .then((internAnswer) => {
        const intern = new Intern(internAnswer);
        employees.push({
            name: intern.getName(),
            id: intern.getId(),
            email: intern.getEmail(),
            school: intern.getSchool(),
            role: intern.getRole()
        });
        return askWhatsNext();
    })

const askWhatsNext = () => {
    return inquirer
        .prompt(whatIsNextQuestions)
        .then((whatIsNextAnswer) => {
            switch (whatIsNextAnswer.typeOfMember) {
                case "Engineer":
                    return askForEngineerInfo();
                case "Intern":
                    return askForInternInfo();
                default:
                    return;
            }
        })
}

console.log("Please build your team.")
inquirer
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers);
        employees.push({
            name: manager.getName(),
            id: manager.getId(),
            email: manager.getEmail(),
            officeNumber: manager.getOfficeNumber(),
            role: manager.getRole()
        });
        return askWhatsNext();
    })
    .then(() => {
        fs.readFile("./src/start.html", "utf8", (err, data) =>
            err ? console.error(err) : fs.writeFile("./dist/myteam.html", data, "utf8", (err) => console.error(err)));

        for (i = 0; i < employees.length; i++) {
            switch (employees[i].role) {
                case "Manager":
                    fs.readFile("./src/manager.html", "utf8", (err, data) => {
                        if (err) {
                            console.error(err);
                        }
                        var manager = data.replace(/name/g, employees[i].name);
                        manager = manager.replace(/i-d/g, employees[i].id);
                        manager = manager.replace(/email/g, employees[i].email);
                        manager = manager.replace(/officeNumber/g, employees[i].officeNumber);
                        fs.appendFile("./dist/myteam.html", manager, "utf8", (err) => console.error(err));
                    });
                case "Engineer":
                    fs.readFile("./src/engineer.html", "utf8", (err, data) => {
                        if (err) {
                            console.error(err);
                        }
                        var engineer = data.replace(/name/g, employees[i].name);
                        engineer = engineer.replace(/i-d/g, employees[i].id);
                        engineer = engineer.replace(/email/g, employees[i].email);
                        engineer = engineer.replace(/git-hub/g, employees[i].github);
                        fs.appendFile("./dist/myteam.html", engineer, "utf8", (err) => console.error(err));
                    });
                case "Intern":
                    fs.readFile("./src/intern.html", "utf8", (err, data) => {
                        if (err) {
                            console.error(err);
                        }
                        var intern = data.replace(/name/g, employees[i].name);
                        intern = intern.replace(/i-d/g, employees[i].id);
                        intern = intern.replace(/email/g, employees[i].email);
                        intern = intern.replace(/school/g, employees[i].school);
                        fs.appendFile("./dist/myteam.html", intern, "utf8", (err) => console.error(err));
                    });
            }
        }

        fs.readFile("./src/end.html", "utf8", (err, data) =>
            err ? console.error(err) : fs.appendFile("./dist/myteam.html", data, "utf8", (err) =>
                err ? console.error(err) : console.log("File Generated!")));
    })