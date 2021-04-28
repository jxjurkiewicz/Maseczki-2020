function toggleStickerHeader() {
    let currentScrollPosition = window.scrollY;
    if (currentScrollPosition) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
}

window.addEventListener("scroll", toggleStickerHeader);

const data = {
    currency: "PLN",
    products: [
        {
            id: 0,
            name: "Maseczka ochronna\n(10szt/opakowanie)",
            priceNetto: "20.00",
            priceBrutto: "25.00",
            quantity: 200,
            thumbnail:
                "https://cms.naszemaseczki.pl/userfiles/products/81-1607499002_thumb.png",
        },
        {
            id: 1,
            name: "Maseczka ochronna typu FFP1\n(50szt/opakowanie)",
            priceNetto: "25.00",
            priceBrutto: "45.00",
            quantity: 250,
            thumbnail:
                "https://cms.naszemaseczki.pl/userfiles/products/81-1607499002_thumb.png#",
        },
        {
            id: 69,
            name: "Maseczka ochronna\n(100szt/opakowanie)",
            priceNetto: "55.00",
            priceBrutto: "65.00",
            quantity: 100,
            thumbnail:
                "https://cms.naszemaseczki.pl/userfiles/products/81-1607499002_thumb.png",
        },
        {
            id: 3,
            name: "Maseczka ochronna\n(200szt/opakowanie)",
            priceNetto: "60.00",
            priceBrutto: "70.00",
            quantity: 50,
            thumbnail:
                "https://cms.naszemaseczki.pl/userfiles/products/81-1607499002_thumb.png",
        },
    ],
};

let productsHtml = "";
function assignProductHtml(item) {
    productsHtml += `<div class="products__content">
    <div class="products__content__img">
        <img
            src="${item.thumbnail}"
        />
    </div>
    <div class="products__content__title">
        <a href="#" class="bold">
            ${item.name}
        </a>
    </div>
    <div class="products__content__price">
        <span>cena brutto</span>
        <span class="bold">${item.priceBrutto} PLN</span>
    </div>
    <div class="buy-container">
        <div class="buy">
            <a href="#">
                <span class="bold"> kup teraz </span>
            </a>
        </div>
        <div class="cart">
            <a href="#">
                <i class="fas fa-cart-plus"></i>
            </a>
        </div>
    </div>
</div>`;
}
data.products.forEach(assignProductHtml);

const productElement = document.querySelector("#productsList");
productElement.innerHTML = productsHtml;

function test() {
    console.log("elo");
}

function toggleMenu() {
    document.querySelector(".menu").classList.add("menu-visible");
    document.querySelector("body").classList.add("body-o-hidden");
}

function closeMenu() {
    document.querySelector(".menu").classList.remove("menu-visible");
    document.querySelector("body").classList.remove("body-o-hidden");
}
