// Object properties

function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
}

const rec1 = new Rectangle("rectangle1", 10, 5);
const rec2 = new Rectangle("rectangle2", 20, 15);


// Add property
rec1.color = "red";


// remove property
delete rec1.color;

console.log(rec1.hasOwnProperty("color"));

rec2.perimeter = function () {
    return 2 * (this.width + this.height);
}

console.log(rec1);
console.log(rec2);

console.log(rec1.area());
console.log(rec2.area());

console.log(rec2.perimeter());

//Get key
console.log(Object.keys(rec1));

//get values
console.log(Object.values(rec1));

//Get entities
console.log(Object.entries(rec1));

for (let [key, value] of Object.entries(rec1)) {
    if (typeof value !== "function") {
        console.log(key, value);
    }
}