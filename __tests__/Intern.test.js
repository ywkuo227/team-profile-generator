const Intern = require("../lib/Intern");
const testdata = {
    name: 'Edward',
    id: '3',
    email: 'edward@fakemail.com',
    school: 'U of Washington'
};

describe("Intern", () => {
    describe("Return Intern School", () => {
        it("This method should return Intern's School.", () => {
            const answer = testdata.school;

            const result = new Intern(testdata).getSchool();

            expect(result).toEqual(answer);
        })
    })

    describe("Return Intern Role", () => {
        it("This method should return Intern Role.", () => {
            const answer = "Intern";

            const result = new Intern(testdata).getRole();

            expect(result).toEqual(answer);
        })
    })
})