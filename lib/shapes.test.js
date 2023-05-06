
const { Triangle, Square, Circle } = require("./shapes.js");


describe("Triangle test", () => 
{ 
  : a string describing the test case, and a function that contains the test code.
  test("green Triangle Tested", () =>
   {
    const shape = new Triangle();//new object for the triangle class and access through method
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});


describe("Square test", () => {
  test("orange square Tested", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});


describe("Circle test", () => {
  test("Circle with #00FFFF background", () => {
    const shape = new Circle();
    shape.setColor("#00FFFF");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#00FFFF" />'
    );
  });
});   