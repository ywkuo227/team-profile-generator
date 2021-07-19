const Engineer = require("../lib/Engineer");
const testdata = {
    name: 'Jessica',
    id: '2',
    email: 'jessica@fakemail.com',
    github: 'jxg120'
};

describe("Engineer", () => {
    describe("Return Engineer GitHub Username", () => {
        it("This method should return Engineer's GitHub Username.", () => {
            const answer = testdata.github;

            const result = new Engineer(testdata).getGitHub();

            expect(result).toEqual(answer);
        });
    });

    describe("Return Engineer Role", () => {
        it("This method should return Engineer Role.", () => {
            const answer = "Engineer";

            const result = new Engineer(testdata).getRole();

            expect(result).toEqual(answer);
        });
    });
});