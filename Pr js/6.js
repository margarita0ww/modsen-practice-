class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 10);

const area = myRectangle.area();
const perimeter = myRectangle.perimeter();

console.log(`Площадь прямоугольника: ${area}`);
console.log(`Периметр прямоугольника: ${perimeter}`);
