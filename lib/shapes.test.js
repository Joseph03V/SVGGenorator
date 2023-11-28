const Question = require('../lib/questions');
const { Triangle, Circle } = require('./shapes');


describe("triangle test", () => {
    test("test for a triangle with a purple background", () => {
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})

describe("triangle test", () => {
    test("test for a square with a purple background", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})

describe("triangle test", () => {
    test("test for a circle with a purple background", () => {
        const shape = new Circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})