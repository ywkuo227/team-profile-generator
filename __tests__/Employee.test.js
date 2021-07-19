const Employee = require("../lib/Employee");
const testdata = {
    name: 'William',
    id: '1',
    email: 'william@fakemail.com',
};

describe("Employee", () => {
    describe("Return Employee Name", () => {
        it("This method should return Employee Name.", () => {
            const answer = testdata.name;

            const result = new Employee(testdata).getName();

            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee ID", () => {
        it("This method should return Employee ID.", () => {
            const answer = testdata.id;

            const result = new Employee(testdata).getId();

            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee Email", () => {
        it("This method should return Employee Email.", () => {
            const answer = testdata.email;

            const result = new Employee(testdata).getEmail();

            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee Role", () => {
        it("This method should return Employee Role.", () => {
            const answer = "Employee";

            const result = new Employee(testdata).getRole();

            expect(result).toEqual(answer);
        });
    });
});