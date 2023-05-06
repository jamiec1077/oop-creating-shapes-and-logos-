
//parent class shape 
class Shape {
    color = "";
    setColor(colorVar)
     {
        this.color = colorVar; 
     }
  }
 //method overriding - this.color
class Triangle extends Shape
 {
    // each subclass can implement its own version of the render method, while still inheriting common functionality from the parent Shape class.
    render() 
    {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }  
  class Square extends Shape
   {
    //render method in object-oriented programming is often used to generate a visual representation of an object.
    render()
     {
        //rect element to represent a square
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  class Circle extends Shape {
    render()
     {
     
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  // Exports classes 
  module.exports = { Triangle, Square, Circle };