const Question = require('../lib/questions');
const { triangle, square, circle } = require('./shapes');


describe("triangle test", () => {
    test("test for a triangle with a purple background", () => {
        const shape = new triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="purple"/>`
        )
    })
})

describe("triangle test", () => {
    test("test for a triangle with a hex purple background", () => {
        const shape = new triangle();
        shape.setColor("734f9a");
        expect(shape.render()).toEqual(
            `<polygon points = "150, 18 244, 182 56, 182" fill="734f9a"/>`
        )
    })
})

describe("square test", () => {
    test("test for a square with a purple background", () => {
        const shape = new square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="purple"/>`
        )
    })
})

describe("square test", () => {
    test("test for a square with a hex purple background", () => {
        const shape = new square();
        shape.setColor("734f9a");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="734f9a"/>`
        )
    })
})


describe("circle test", () => {
    test("test for a circle with a purple background", () => {
        const shape = new circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="100" r="80" fill="purple"/>`
        )
    })
})

describe("circle test", () => {
    test("test for a circle with a hex color purple background", () => {
        const shape = new circle();
        shape.setColor("#734f9a");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="100" r="80" fill="#734f9a"/>`
        )
    })
})