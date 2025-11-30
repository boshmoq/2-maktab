const data = [
  {
    id: 1,
    name: "Mamutxanova Muhayyo Mo'ydinovna",
    img: "https://i.ibb.co/h7qCx3S/director.jpg",
    price: "Direktor",
    cat: "Ma'muriyat",
  },
  {
    id: 2,
    name: "Xurboyeva Barnoxon Shavkatovna ",
    img: "",
    price: "Zam. Direktor",
    cat: "Ma'muriyat",
  },
  {
    id: 18,
    name: "Mirsaydullayeva Muxtasarxon Soibovna",
    img: "",
    price: "Zavuch",
    cat: "Ma'muriyat",
  },
  {
    id: 2,
    name: "Qodirova Sevara Sodiqjonovna",
    img: "https://i.ibb.co/DzcXXfP/sev.jpg",
    price: "Zavuch",
    cat: "Ma'muriyat",
  },
  {
    id: 6,
    name: "Ahmedova Gulnara Alibekovna",
    img: "https://i.ibb.co/yhRSBkx/gul.jpg",
    price: "Rus va Adabiyot o'qituvchisi",
    cat: "Rus tili",
  },
  {
    id: 3,
    name: "Abdurahmonova Iroda Gallabayevna",
    img: "https://i.ibb.co/BwxHgbY/irodash.jpg",
    price: "Matematika fani o'qituvchisi",
    cat: "Matematika",
  },
  {
    id: 13,
    name: "Umaraliyeva Muhayyo Toxirovna",
    img: "",
    price: "Ingliz tili fani o'qituvchisi",
    cat: "Ingliz tili",
  },
  {
    id: 16,
    name: "Iminova Oltinoy Isroilovna",
    img: "https://i.ibb.co/30d3GDw/olt.jpg",
    price: "Informatika fani o'qituvchisi",
    cat: "Informatika",
  },
  {
    id: 7,
    name: "Numonxojayev Abdilbasit Saydulayevich",
    img: "",
    price: "Matematika fani o'qituvchisi",
    cat: "Matematika",
  },
  {
    id: 5,
    name: "Abdumannabov Shohboz Shoxruxovich",
    img: "https://i.ibb.co/s1w3H57/shakhboz.jpg",
    price: "O'zbek va Ingliz tili o'qituvchisi",
    cat: "O'zbek tili",
  },
  {
    id: 21,
    name: "Artikova Nilufar Toxirovna",
    img: "https://i.ibb.co/47ksSyR/nilufar.jpg",
    price: "Biologiya fani o'qituvchisi",
    cat: "Biologiya",
  },
  {
    id: 29,
    name: "Rustamova Muhabbat Ilhomjonovna",
    img: "https://i.ibb.co/3MZRmKd/muhabbat.jpg",
    price: "Informatika fani o'qituvchisi",
    cat: "Informatika",
  },
  {
    id: 7,
    name: "Abdullayeva Moxira Ulugbekovna",
    img: "",
    price: "Tarix fani o'qituvchisi",
    cat: "Tarix",
  },
  {
    id: 11,
    name: "Gaipova Feruza Habibullayevna",
    img: "",
    price: "Ingliz tili o'qituvchisi",
    cat: "Ingliz tili",
  },
  {
    id: 4,
    name: "Mirzayeva Ra'no Jurayevna ",
    img: "https://i.ibb.co/X5kjztp/ranojura.jpg",
    price: "Fizika fani o'qituvchisi",
    cat: "Fizika",
  },
  {
    id: 9,
    name: "Alieva Nigora Erkinovna",
    img: "https://i.ibb.co/HCgxNtG/nigerk.jpg",
    price: "Rus tili fani o'qituvchisi",
    cat: "Rus tili",
  },
  {
    id: 8,
    name: "Alimov Dilshod Mo'ydinovich",
    img: "",
    price: "Tarix fani o'qituvchisi",
    cat: "Tarix",
  },
  {
    id: 12,
    name: "Abduraximova Muattar Tohirovna",
    img: "",
    price: "Boshlang'ich ta'lim o'qituvchisi",
    cat: "Boshlang'ich ta'lim",
  },
  {
    id: 14,
    name: "Hamrayeva Ro'zigul Fayzullayevna",
    img: "",
    price: "Tarix fani o'qituvchisi",
    cat: "Tarix",
  },
  {
    id: 10,
    name: "Djampo'latov Shodil Mamadaliyevich",
    img: "https://i.ibb.co/R6dbLFR/photo-2019-01-03-15-20-05.jpg",
    price: "Rus tili fani o'qituvchisi",
    cat: "Rus tili",
  },
  {
    id: 15,
    name: "Ibragimova Roza Raxmanovna",
    img: "",
    price: "Boshlang'ich ta'lim o'qituvchisi",
    cat: "Boshlang'ich ta'lim",
  },
  {
    id: 17,
    name: "Kadirova Muxayyo Ziyadullayevna",
    img: "",
    price: "Kimyo fani o'qituvchisi",
    cat: "Kimyo",
  },
  {
    id: 55,
    name: "Begisheva Laura Dusheevna",
    img: "",
    price: "Boshlang'ich ta'lim o'qituvchisi",
    cat: "Boshlang'ich ta'lim",
  },
  {
    id: 19,
    name: "Yusupova Surayyo Toxirovna",
    img: "",
    price: "Ingliz tili o'qituvchisi",
    cat: "Ingliz tili",
  },
  {
    id: 20,
    name: "Maxmudov Shuxratbek Toxirjonovich",
    img: "https://i.ibb.co/Pc9QmKZ/sh-sth.jpg",
    price: "Jismoniy Tarbiya fani o'qituvchisi",
    cat: "Jismoniy Tarbiya",
  },
  {
    id: 26,
    name: "Xolmatova Oqila Axmadjanovna",
    img: "https://i.ibb.co/PF2Tp0z/oqila.jpg",
    price: "Boshlang'ich ta'lim o'qituvchisi",
    cat: "Boshlang'ich ta'lim",
  },
  {
    id: 20,
    name: "Madraximov Sherzod Abdumannobovich",
    img: "https://i.ibb.co/8DhLppc/domla.jpg",
    price: "Jismoniy Tarbiya fani o'qituvchisi",
    cat: "Jismoniy Tarbiya",
  },
  {
    id: 27,
    name: "Otaboyeva Mamlakat Baxromjonovna",
    img: "",
    price: "Boshlang'ich ta'lim o'qituvchisi",
    cat: "Boshlang'ich ta'lim",
  },
  {
    id: 27,
    name: "Xoldarov Baxodir Nizamiddinovich",
    img: "https://i.ibb.co/wghVXgL/image.jpg",
    price: "Ingliz tili o'qituvchisi",
    cat: "Ingliz tili",
  },
  {
    id: 25,
    name: "Zuxritdinov Akmaljon Sadritdinovich",
    img: "https://i.ibb.co/YpxWFNt/akmal-shayton.jpg",
    price: "Musiqa fani o'qituvchisi",
    cat: "Musiqa",
  },
  {
    id: 200,
    name: "Alimova Sobira Ro'ziboyevna",
    img: "",
    price: "O'zbek tili o'qituvchisi",
    cat: "O'zbek tili",
    alt: "",
  },

];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".teachers__search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=${product.alt} class="image"
          />
          <span class="name">${product.name}</span>
          <span class="priceText">${product.price}</span>
        </div>
    `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "Hamma",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "Hamma"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
