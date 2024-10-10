// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }
    get perimeter() {
        const initialValue = 0;
        return this.array.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 
            initialValue,
        )
    }
}

class Triangle extends Polygon {
    constructor(array) {
        super(array);
    }
    get isValid() {

        if (this.countSides === 3) {
            const [a, b, c] = this.array;
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
                return true;
            } 
        }
        return false;
    }
}

class Square extends Polygon {
    constructor(array) {
        super(array);
    }
    get isValid() {
        if ((this.countSides === 4) &&
         (this.array.every(v => v === this.array[0]))) {
            return true;
        } else{
        return false;
        }
    }
    get area() {
        return this.array[0] ** 2;
    }
}

let square = new Square( [ 5, 5, 5, 5 ] )