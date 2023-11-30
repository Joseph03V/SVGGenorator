const Question = require('../lib/questions');
const { triangle, square, circle } = require('./shapes');


describe("triangle test", () => {
    test("test for a triangle with a purple background", () => {
        const shape = new triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})

describe("square test", () => {
    test("test for a square with a purple background", () => {
        const shape = new square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})

describe("circle test", () => {
    test("test for a circle with a purple background", () => {
        const shape = new circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple" />`
        )
    })
})