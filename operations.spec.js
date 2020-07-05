const { getTwoArgsOperation } = require("./operations");

describe.skip("Operation getter", () => {
    it("should return addition function", () => {
        expect(getTwoArgsOperation("+").name).toBe("addition");
    });

    it("should return subtraction function", () => {
        expect(getTwoArgsOperation("-").name).toBe("subtraction");
    });

    it("should return multiplication function", () => {
        expect(getTwoArgsOperation("*").name).toBe("multiplication");
    });

    it("should return division function", () => {
        expect(getTwoArgsOperation("/").name).toBe("division");
    });

    it("should return exponentiation function", () => {
        expect(getTwoArgsOperation("**").name).toBe("exponentiation");
    });

    it("should return percent function", () => {
        expect(getTwoArgsOperation("%").name).toBe("percent");
    });
});

describe.skip("Two arguments operation", () => {
    it("addition", () => {
        expect(getTwoArgsOperation("+")(1, 2)).toBe(3);
    });
});