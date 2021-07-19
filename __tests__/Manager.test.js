const Manager = require("../lib/Manager");
const testdata = {
    name: 'William',
    id: '1',
    email: 'william@fakemail.com',
    officeNumber: '1'
};

describe("Manager", () => {
    describe("Return Manager Office Number", () => {
        it("This method should return Manager Office Number.", () => {
            const answer = testdata.officeNumber;

            const result = new Manager(testdata).getOfficeNumber();

            expect(result).toEqual(answer);
        });
    });

    describe("Return Manager Role", () => {
        it("This method should return Manager Role.", () => {
            const answer = "Manager";

            const result = new Manager(testdata).getRole();

            expect(result).toEqual(answer);
        });
    });
});