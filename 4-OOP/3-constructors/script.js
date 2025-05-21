// Constructor Function
function Product(title, description, price, stock) {
    // Properties
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    // Methods  
    this.display = function () {
        return `Ürün Başlığı: ${this.title} ürün acıklaması: ${this.description} fiyatı: ${this.price}`;
    }
    this.is_active = function(){
        return (this.stock > 0) ? "satışta" : "stok yok";
    }
}

// Object
const product1 = new Product("Samsung s25", "güzel bir telefon", 70000, 100);
const product2 = new Product("Samsung s26", "güzel bir telefon", 70000, 0);
const product3 = new Product("Samsung s27", "güzel bir telefon", 70000, 100);

// console.log(product1.title, product1.description, product1.price, product1.stock);
// console.log(product2.title, product2.description, product2.price, product2.stock);
// console.log(product3.title, product3.description, product3.price, product3.stock);

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());
console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());