const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let logoString = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" version="1.1">';
  logoString += "<g>";
  logoString += `${answers.shape}`;

  if (answers.shape === "Triangle") {
    logoString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    logoString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Circle") {
    logoString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Pentagon") {
    logoString += `<polygon points="150,18 242,72 212,168 88,168 58,72" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Hexagon") {
    logoString += `<polygon points="150, 10 244, 70 244, 135 150, 195 56, 135 56, 70" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    logoString += `<rect x="73" y="40" width="160" height="80" rx="20" ry="20" fill="${answers.shapeBackgroundColor}"/>`;
  }

  logoString += `<text x="100" y="80" text-anchor="middle" font-size="60" fill="#000000">${answers.text}</text>`;
  logoString += "</g>";
  logoString += "</svg>";

  fs.writeFile(fileName, logoString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

function prompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What text would you like to display in the logo?",
        name: "text",
      },
      {
        type: "input",
        message: "What text color would you like in the logo (color code or hexadecimal number)?",
        name: "textColor",
        default: "#000000",
      },
      {
        type: "list",
        message: "What shape would you like to use for your logo?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape color (enter color keyword or a hexadecimal number)",
        name: "shapeBackgroundColor",
        default: "#FFFFFF",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Maximum text length is 3 characters.");
        prompt();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

prompt();