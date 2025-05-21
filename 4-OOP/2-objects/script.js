// Objects

// Person, Product, Comment

const product = {

    // properties
    title: "Samsung s25",
    description: "güzel bir telefon",
    price: 70000,
    stock: 100,

    // methods
    display: function () {
        return `Ürün Başlığı: ${this.title} ürün acıklaması: ${this.description} fiyatı: ${this.price}`;
    },

    is_active: function () {
        return (this.stock > 0) ? "satışta" : "stok yok";
    }
};

const product2 = {

    // properties
    title: "Samsung s25",
    description: "güzel bir telefon",
    price: 70000,
    stock: 100,

    // methods
    display: function () {
        return `Ürün Başlığı: ${this.title} ürün acıklaması: ${this.description} fiyatı: ${this.price}`;
    },

    is_active: function () {
        return (this.stock > 0) ? "satışta" : "stok yok";
    }
};

// Kalıp => kopya1, kopya2

// Rectagle => baslık, genislik, yükseklik, alan, cevre
// Person => ad, soyad, yas, cinsiyet, medeni durum

console.log(product.title)
console.log(product.description)
console.log(product.price)

console.log(product.display());

console.log(product.is_active());
