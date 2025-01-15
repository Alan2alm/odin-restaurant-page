import "./style.css";
import pizzaImg1 from "../images/pizza-mozzarella-cheese.png";
import pizzaImg2 from "../images/Hawaiian-Pizza.jpg";
import pizzaImg3 from "../images/Margherita-Pizza.png";
import pizzaImg4 from "../images/vegetarian-pizza.jpg";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contentBox = document.querySelector("#content");

const layout = (function(){
    let home = [];
    let menu = [];
    let about = [];

    const createTitle = (content) =>{
        let title = document.createElement("h1");
        title.textContent = content;
        return title;
    };

    const createText = (content) =>{
        let text = document.createElement("div");
        text.textContent = content;
        return text;
    };

    const createImg = (direction, description) =>{
        let img = document.createElement("img");
        img.src = direction;
        img.alt = description;
        return img;
    };

    const createProdDiv = (imgDir, descriptionImg, text) =>{
        let menuProd = document.createElement("div");
        let menuProdImg = createImg(imgDir, descriptionImg);
        menuProdImg.id = "prod-img"
        menuProd.appendChild(createText(text));
        menuProd.appendChild(menuProdImg);
        return menuProd;
    };

    const prepareHome = () =>{
        home.push(createTitle("Home"));
        home.push(createText("Welcome to Bella Pizza, where every slice is crafted with passion and tradition. Our pizzeria brings the authentic taste of Italy right to your table, using only the finest, freshest ingredients. From our hand-tossed crusts to our signature sauces, each pizza is made to order with love and care."));
        home.push(createText("Whether you’re in the mood for a classic Margherita, a bold Meat Lover’s, or something unique from our specialty menu, we have something to satisfy every craving. Pair your pizza with a refreshing drink, and don’t forget to try our house-made garlic knots or fresh salads for the perfect meal."));
        home.push(createText("At Bella Pizza, we believe in creating not just a meal, but an experience. Our warm, welcoming atmosphere is perfect for family dinners, date nights, or a casual night out with friends. We’re dedicated to making every visit memorable with fast, friendly service and delicious food."));
        home.push(createText("Come for the pizza, stay for the experience. We can’t wait to serve you!"));
        home.push(createTitle("Hours"));
        let OpenHour = createText("- Monday: 8am - 8pm");
        OpenHour.id = "openHour";
        home.push(OpenHour);
        OpenHour = createText("- Tuesday: 8am - 8pm");
        OpenHour.id = "openHour";
        home.push(OpenHour);
        OpenHour = createText("- Wednesday: 8am - 8pm");
        OpenHour.id = "openHour";
        home.push(OpenHour);
        OpenHour = createText("- Thursday: 8am - 8pm");
        OpenHour.id = "openHour";
        home.push(OpenHour);
        OpenHour = createText("- Friday: 8am - 8pm");
        OpenHour.id = "openHour";
        home.push(OpenHour);
    };
     
    const prepareMenu = () =>{
        menu.push(createTitle("Menu"));
        let menuProdName = createTitle("mozzarella pizza - $8.00");
        let menuProd = createProdDiv(pizzaImg1, "mozzarella pizza image", "A timeless classic! Our mozzarella pizza features a crispy, golden crust topped with rich, creamy mozzarella cheese that melts to perfection. Paired with a tangy, homemade tomato sauce made from the finest ripe tomatoes, and finished with a sprinkle of fresh basil for a fragrant, herby touch. Simple, fresh, and absolutely delicious!");
        menuProdName.id = "prod-title";

        menu.push(menuProdName);
        menu.push(menuProd);

        menuProdName = createTitle("Hawaiian Pizza - $9.00");
        menuProd = createProdDiv(pizzaImg2, "Hawaiian Pizza image", "A sweet and savory delight! Topped with tender ham, juicy pineapple, melted mozzarella, and our signature tomato sauce, this pizza brings a tropical twist to the classic. The perfect balance of flavors that will transport your taste buds to paradise!");
        menuProdName.id = "prod-title";

        menu.push(menuProdName);
        menu.push(menuProd);

        menuProdName = createTitle("Margherita Pizza - $11.00");
        menuProd = createProdDiv(pizzaImg3, "Margherita Pizza image", "A true classic! Fresh mozzarella, vibrant tomato sauce, and fragrant basil leaves come together on a perfectly crispy crust, drizzled with extra virgin olive oil. Simple, authentic, and utterly delicious—this pizza is a celebration of the finest ingredients!");
        menuProdName.id = "prod-title";

        menu.push(menuProdName);
        menu.push(menuProd);

        menuProdName = createTitle("Vegetarian Pizza - $7.00");
        menuProd = createProdDiv(pizzaImg4, "Vegetarian Pizza image", "A fresh and flavorful choice for veggie lovers! Topped with a colorful mix of seasonal vegetables like bell peppers, mushrooms, red onions, olives, and tomatoes, all on a bed of creamy mozzarella and our tangy tomato sauce. A wholesome, satisfying pizza that’s as delicious as it is colorful!");
        menuProdName.id = "prod-title";

        menu.push(menuProdName);
        menu.push(menuProd);
    };

    const prepareAbout = () =>{
        about.push(createTitle("About"));
        about.push(createText("Welcome to Bella Pizza, where every slice is a taste of Italy! Located in the heart of the community, we bring the authentic flavors of traditional Italian pizza straight to your table. Our passion for pizza is reflected in every dough we handcraft, every topping we choose, and every bite you take."));
        about.push(createText("At Bella Pizza, we believe in using only the finest, freshest ingredients—premium mozzarella, ripe tomatoes, and locally sourced vegetables, all complemented by our signature sauces and hand-stretched dough. Whether you prefer a classic Margherita, a savory meat lover's pie, or a bold veggie combo, our menu has something for everyone."));
        about.push(createText("Our cozy, welcoming atmosphere makes Bella Pizza the perfect spot for family dinners, casual hangouts, or a romantic date night. We are dedicated to providing not only delicious food but also excellent service, ensuring that your experience with us is always memorable."));
        let endMsg = createText("Join us for a slice of happiness and discover why Bella Pizza is loved by locals and visitors alike! Buon appetito!");
        endMsg.id = "invitation-end-text";
        about.push(endMsg);
    };

    const showHome = () =>{
        if(home.length < 1){
            prepareHome();
        }
        contentBox.textContent = "";
        home.forEach(part =>{
            contentBox.appendChild(part);
        })
    };

    const showMenu = () =>{
        if(menu.length < 1){
            prepareMenu();
        }
        contentBox.textContent = "";
        menu.forEach(part =>{
            contentBox.appendChild(part);
        })
    };

    const showAbout = () =>{
        if(about.length < 1){
            prepareAbout();
        }
        contentBox.textContent = "";
        about.forEach(part =>{
            contentBox.appendChild(part);
        })
    };

    return {prepareHome, prepareMenu, prepareAbout, showHome, showMenu, showAbout, createTitle, createText, createImg, createProdDiv};
})();

layout.showHome();

homeBtn.addEventListener('click', ()=>{
    layout.showHome();
})

menuBtn.addEventListener('click', ()=>{
    layout.showMenu();
})

aboutBtn.addEventListener('click', ()=>{
    layout.showAbout();
})