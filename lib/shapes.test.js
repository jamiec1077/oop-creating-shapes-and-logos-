//{} object destructuring it is importing an object from the "./shapes.js" module and then extracting three specific properties or classes from that object (Triangle, Square, and Circle) into their own variables using destructuring syntax.
//New variables (Triangle, Square, and Circle) that reference specific properties or classes within the object returned by the require statement
//Triangle is the class name in shape
const { Triangle, Square, Circle } = require("./shapes.js");

// green Triangle 
//describe(group of related test cases) is the function with two parameter firstis test title second one is call back function
describe("Triangle test", () => 
{ 
  //test(individual test) is method,first parameter is test description, test is a global function that is used to define a test case. It takes two arguments: a string describing the test case, and a function that contains the test code.
  test("green Triangle Tested", () =>
   {
    const shape = new Triangle();//new object for the triangle class and access through method
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

// Orange Square
describe("Square test", () => {
  test("orange square Tested", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

//Circle with  #ca00ca color
describe("Circle test", () => {
  test("Circle with #00FFFF background", () => {
    const shape = new Circle();
    shape.setColor("#00FFFF");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#00FFFF" />'
    );
  });
});   