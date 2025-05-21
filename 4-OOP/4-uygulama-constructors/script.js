// Constructor Function
function Player(name) {
    //  Properties
    this.name = name;
    this.score = 0;

    // Methods  
    this.start = function () {
        return `${this.name} oyuna başladı`;
    };
    this.stop = function () {
        return `${this.name} oyundan çıktı`;
    };
    this.pause = function () {
        return `${this.name} oyunu durdurdu`;
    };
    this.add_score = function (val) {
        this.score += val;
    };
    this.show_score = function () {
        return `${this.name} puanı: ${this.score}`;
    }
}

//  Object
const oyuncu1 = new Player("Ahmet");
const oyuncu2 = new Player("Çınar");
const oyuncu3 = new Player("Yeliz");

oyuncu1.add_score(50);

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());
console.log(oyuncu1.show_score());