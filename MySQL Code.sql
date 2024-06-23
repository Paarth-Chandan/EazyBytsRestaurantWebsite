CREATE DATABASE IF NOT EXISTS RestaurantDB;
USE RestaurantDB;

DROP TABLE IF EXISTS CUSTOMER;
CREATE TABLE CUSTOMER(
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(50) DEFAULT NULL,
    password VARCHAR(50) DEFAULT NULL,
    address VARCHAR(70) DEFAULT NULL,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS FOODITEMS;
CREATE TABLE FOODITEMS(
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    price DECIMAL(10,2) DEFAULT NULL,
    image_url VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO FOODITEMS (name, description, price, image_url) VALUES
('Greek Salad', 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.', 300.00, '/images/menu-1.png'),
('Lasagne', 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.', 470.00, '/images/menu-2.png'),
('Butternut Pumpkin', 'Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.', 60.00, '/images/menu-3.png'),
('Tokusen Wagyu', 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.', 390.00, '/images/menu-4.png'),
('Olivas Rellenas', 'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.', 350.00, '/images/menu-5.png'),
('Opu Fish', 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.', 390.00, '/images/menu-6.png'),
('Chicken Alfredo', 'Grilled chicken, fettuccine pasta, creamy Alfredo sauce. Some random description this is some food', 390.00, '/images/menu-7.jpeg'),
('Caesar Salad', 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing.', 350.00, '/images/menu-8.jpeg'),
('Shrimp Scampi', 'Shrimp, garlic, white wine, lemon, linguine pasta this is some random description this is food.', 570.00, '/images/menu-9.jpeg'),
('Pasta Bolognese', 'A classic Italian dish featuring a rich and hearty sauce made with ground beef, tomatoes, onions, and a blend of aromatic herbs and spices.', 330.00, '/images/menu-10.jpg'),
('Truffle Risotto', 'Creamy risotto made with Arborio rice, infused with earthy and aromatic black truffles, finished with Parmesan cheese and a drizzle of truffle oil.', 650.00, '/images/menu-11.jpg'),
('Truffle Macaroni and Cheese', 'A luxurious twist on the classic comfort food, featuring creamy macaroni and cheese infused with truffle oil or shavings of black truffle, and topped with breadcrumbs.', 670.00, '/images/menu-12.webp'),
('Château Margaux 2015', "A legendary wine from one of Bordeaux's most esteemed estates. This opulent red blend boasts notes of blackcurrant, and truffle, integrated with a luxurious finish. Perfect for special occasions.", 3300.00, '/images/menu-13.jpeg'),
('Domaine de la Romanée-Conti La Tâche 2016', 'An exquisite Pinot Noir from Burgundy, La Tâche captivates with its bouquet of red berries, roses, and earthy undertones.', 4190.00, '/images/menu-14.jpeg'),
('Opus One 2018', 'This iconic Napa Valley Cabernet Sauvignon blend exudes sophistication. Aromas of blackberry, cassis, and espresso lead to a rich palate of dark fruit, chocolate, and cedar.', 4570.00, '/images/menu-15.jpeg'),
('Sassicaia 2016', 'A benchmark Super Tuscan, Sassicaia impresses with its refined bouquet of black cherry, plum, and Mediterranean herbs.', 3300.00, '/images/menu-16.jpeg'),
('Penfolds Grange 2014', "Australia's most celebrated wine, Penfolds Grange, offers a symphony of aromas, including blackberry, licorice, and dark chocolate.", 3340.00, '/images/menu-17.jpeg'),
("Château d'Yquem 2009", "This renowned Sauternes dessert wine enchants with its golden hue and intoxicating aromas of apricot, honey, and crème brûlée.", 5610.00, '/images/menu-18.jpeg'),
("Krug Grande Cuvée", "A masterpiece of Champagne, Krug Grande Cuvée delights with its intricate bouquet of citrus, brioche, and almond.", 4390.00, '/images/menu-19.jpeg'),
("Cloudy Bay Sauvignon Blanc 2020", "A quintessential Marlborough Sauvignon Blanc, Cloudy Bay dazzles with its vibrant aromas of passionfruit, lime, and freshly cut grass.", 3250.00, '/images/menu-20.jpeg');


DROP TABLE IF EXISTS CARTITEMS;
CREATE TABLE CARTITEMS(
    id BIGINT NOT NULL AUTO_INCREMENT,
    food_item_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (food_item_id) REFERENCES FOODITEMS(id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id)
);

SELECT * FROM CUSTOMER;
SELECT * FROM FOODITEMS;
SELECT * FROM CARTITEMS;