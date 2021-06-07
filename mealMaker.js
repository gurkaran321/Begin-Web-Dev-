let menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _deserts: [],
        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get deserts() {
            return this._deserts;
        },
        set appetizers(obj) {
            this._appetizers.push(obj);
        },
        set mains(obj) {
            //console.log("obj is " + obj);
            this._mains.push(obj);
        },
        set deserts(obj) {
            this._deserts.push(obj);
        }
    },
    get courses() {
        return this._courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            dishName: dishName,
            dishPrice: dishPrice
        };


        this._courses[courseName] = dish;

    },
    getRandomDishFromCourse(courseName) {

        let dishes = this._courses[courseName];

        let randomIndex = Math.floor(Math.random() * dishes.length);
        console.log(dishes);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let desert = this.getRandomDishFromCourse('deserts');
        let main = this.getRandomDishFromCourse('mains');
        console.log(main);
        let totalPrice = main.dishPrice + desert.dishPrice + appetizer.dishPrice;
        return `Total price of ${main.dishName}, ${desert.dishName} and ${appetizer.dishName} is ${totalPrice}`;
    }
};

menu.addDishToCourse('mains', 'Dal', 100);

console.log(menu._courses.mains);
menu.addDishToCourse('appetizers', 'Cold Coffee', 80);
console.log(menu._courses.appetizers);
menu.addDishToCourse('deserts', 'cream', 50);
console.log(menu._courses.deserts);

console.log(menu.generateRandomMeal());