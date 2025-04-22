const menuItems = [
  {
    category: 'Savoury Bakes',
    items: [
      {
        title: 'Focaccia',
        description: 'Indulge in our signature focaccia, freshly baked slabs handmade with care. Enjoy it on its own, as a sandwich base, or paired with your favourite dishes.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/focaccia2.jpg',
        wholesalePrice: '£2.00 a slab, £16 per tray',
        basketUnit: "tray",
        basketPrice: 16
      },
      {
        title: 'Quiche of the Day',
        description: 'Our quiches are crafted daily with premium ingredients, offering a perfect blend of flavours and textures.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/quiche.jpeg',
        wholesalePrice: '£20 (10 portions)',
        basketUnit: "10 portions",
        basketPrice: 20
      },
      {
        title: 'Goat Cheese Tart',
        description: 'A delicious tart featuring creamy goat cheese and fresh herbs.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/goat_cheese_tart1.jpg',
        wholesalePrice: '£3.00',
        basketUnit: "",
        basketPrice: 3
      },
      {
        title: 'Sweet Potato and Black Bean Roll',
        description: 'A vegetarian delight packed with sweet potatoes and black beans wrapped in flaky pastry.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/sweetpot_blackbean1.jpg',
        wholesalePrice: '£2.75',
        basketUnit: "",
        basketPrice: 2.75
      },
      {
        title: 'Sausage Rolls',
        description: 'Different options available: Pork and Herb, BBQ Pulled Pork, Pork and Stilton, and Pork, Bacon and Stuffing.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/sausage_roles_plate2.jpg',
        wholesalePrice: '£3.00, £2.75 for Pork and Herb',
        basketUnit: "",
        basketPrice: 3
      },
      // {
      //   title: 'BBQ Pulled Pork Rolls',
      //   description: 'Tender pulled pork in a rich BBQ sauce, encased in a soft, freshly baked roll.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'images-web/sausage_roles_plate2.jpg',
      // },
      // {
      //   title: 'Pork and Herb Sausage Rolls',
      //   description: 'Classic sausage rolls made with high-quality pork and aromatic herbs.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'images-web/sausage_roles_plate.jpg',
      // },
      // {
      //   title: 'Pork and Stilton Rolls',
      //   description: 'A bold twist on traditional sausage rolls, featuring pork and Stilton cheese.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'comingsoon.jpg',
      // },
      // {
      //   title: 'Pork, Bacon, Stuffing Rolls',
      //   description: 'A hearty roll filled with pork, bacon, and flavorful stuffing.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'comingsoon.jpg',
      // },
      {
        title: 'Salad of the Day',
        description: 'A fresh, seasonal salad made daily with locally sourced ingredients.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/salad.jpeg',
        wholesalePrice: '£4.50 per box',
        basketUnit: "box",
        basketPrice: 4.5
      },
      {
        title: 'Soup of the Day',
        description: 'Enjoy the comforting warmth of our Soup of the Day, freshly prepared with wholesome ingredients to soothe your senses.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/soup_crop.jpeg',
        wholesalePrice: '£10.00 per Litre',
        basketUnit: "Litre",
        basketPrice: 10
      },
      {
        title: 'Feta and Chilli Honey Knots',
        description: 'Soft, flavourful knots infused with feta cheese and a hint of chilli honey glaze.',
        ingredients: 'Ingredients Placeholder',
        image: 'comingsoon.jpg',
        wholesalePrice: '£2.75',
        basketUnit: "",
        basketPrice: 2.75
      },
    ],
  },
  {
    category: 'Assorted',
    items: [
      {
        title: 'Almond Croissant',
        description: 'A flaky, buttery croissant filled with sweet almond paste.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/almond_croissant1.jpg',
        wholesalePrice: '£2.30',
        basketUnit: "",
        basketPrice: 2.3
      },
      {
        title: 'Chocolate Croissant',
        description: 'A classic pastry with layers of buttery dough and rich chocolate filling.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/pain_choc1.jpg',
        wholesalePrice: '£2.30',
        basketUnit: "",
        basketPrice: 2.3
      },
      {
        title: 'Scones',
        description: 'Multiple options available: Plain, Fruit, Cinnamon & Sultanas (£1.90) Cheese, Cheese and Bacon, Cheese and Chive, and Sundried Tomato and Olive (£2.00).',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/scones_tray1.jpg',
        wholesalePrice: '£1.90 (Plain and sweet) - £2 (Savoury)',
        basketUnit: "",
        basketPrice: 2
      },
      // {
      //   title: 'Cheese Scones',
      //   description: 'Savory cheese scones, perfect with butter or a warm bowl of soup.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'images-web/scones_tray1.jpg',
      // },
      {
        title: 'Granola Pots',
        description: 'A healthy and delicious granola pot, layered with yogurt and fresh fruit.',
        ingredients: 'Ingredients Placeholder',
        image: 'comingsoon.jpg',
        wholesalePrice: '£2.75',
        basketUnit: "",
        basketPrice: 2.75
      },
      {
        title: 'Cinnamon Focaccia',
        description: 'A sweet take on our signature focaccia, infused with cinnamon and sugar.',
        ingredients: 'Ingredients Placeholder',
        image: 'comingsoon.jpg',
        wholesalePrice: '£2.75 per slab',
        basketUnit: "slab",
        basketPrice: 2.75
      },
      {
        title: 'Cinnamon Buns and Knots',
        description: 'Soft, fluffy cinnamon buns topped with a sweet glaze.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/cinnamon_buns.jpeg',
        wholesalePrice: '£2.50',
        basketUnit: "",
        basketPrice: 2.5
      },
      {
        title: 'Pastel de Nata',
        description: 'Portuguese egg custard tart pastries, dusted with cinnamon.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/pastal_del_nata.jpeg',
        wholesalePrice: '£2.00',
        basketUnit: "",
        basketPrice: 2
      },
      {
        title: 'Cookies',
        description: 'A selection of freshly baked cookies, including Triple Chocolate, Salted Chocolate Chip, and Almond Cookie.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/cookies1.jpg',
        wholesalePrice: '£1.10',
        basketUnit: "",
        basketPrice: 1.10
      }
      // {
      //   title: 'Fruit Scone',
      //   description: 'A classic fruit scone packed with raisins and a hint of citrus zest.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'images-web/scones_tray1.jpg',
      // },
      // {
      //   title: 'Cheese and Bacon Scones',
      //   description: 'A savory twist on traditional scones, featuring crispy bacon and melted cheese.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'images-wa/scones.jpeg',
      // },
      // {
      //   title: 'Sundried Tomato and Olive Scones',
      //   description: 'A Mediterranean-inspired scone with sundried tomatoes and olives.',
      //   ingredients: 'Ingredients Placeholder',
      //   image: 'comingsoon.jpg',
      // },
    ],
  },
  {
    category: 'Special Enquiries',
    items: [
      {
        title: 'Grazing Boards',
        description: 'An assortment of sweet and savory delights for gatherings and celebrations.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/grazing1.jpg',
        wholesalePrice: 'Enquire',
        basketUnit: "",
        basketPrice: 0
      },
      {
        title: 'Corporate Lunches',
        description: 'Tailored catering solutions for business meetings and corporate events.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-web/selection1.jpg',
        wholesalePrice: 'Enquire',
        basketUnit: "",
        basketPrice: 0
      },
      {
        title: 'Special Occasion Cakes',
        description: 'Cakes for all special occasions, crafted with care and premium ingredients.',
        ingredients: 'Ingredients Placeholder',
        image: 'images-wa/birthday_cake_crop.jpeg',
        wholesalePrice: 'Enquire',
        basketUnit: "",
        basketPrice: 0
      },
      {
        title: 'Wedding Cakes',
        description: 'Elegant and beautifully crafted wedding cakes for your big day.',
        ingredients: 'Ingredients Placeholder',
        image: 'images/stratton_cake.jpg',
        wholesalePrice: 'Enquire',
        basketUnit: "",
        basketPrice: 0
      },
    ],
  }
];

export default menuItems;
