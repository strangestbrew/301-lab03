'use strict';

let hornsDataSet =
[
  {
    'image_url': 'http://cdn.shopify.com/s/files/1/0288/5332/files/jackalope_in_the_wild_large.jpg?11502701639502724114',
    'title': 'Jackalope',
    'description': 'You know, just a jackalope in there for good measure. I know they don\'t have horns, but they have antlers. And they may or may not be real.',
    'keyword': 'jackalope',
    'horns': 2
  },
  {
    'image_url': 'http://mediad.publicbroadcasting.net/p/kuvo/files/styles/medium/public/201707/dizzy_gillespie.jpg',
    'title': 'Dizzy Gillespie',
    'description': 'Technically, this is a single horn',
    'keyword': 'horn',
    'horns': 1
  },
  {
    'image_url': 'https://res.cloudinary.com/teepublic/image/private/s--HybAy5WN--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1519814898/production/designs/2404352_0.jpg',
    'title': 'Baby Rhino',
    'description': 'So cute, you can print it on a shirt',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://images.vat19.com/covers/large/tricerataco-taco-holder.jpg',
    'title': 'TriceraTaco',
    'description': 'It\'s the perfect size and shape to hold your tacos for you',
    'keyword': 'triceratops',
    'horns': 3
  },
  {
    'image_url': 'http://mesozoic.mikelaraman.com/wp-content/uploads/2017/08/trike_scales-604x270.jpg',
    'title': 'Jurassic Park',
    'description': 'The fake triceratops from the original Jurrasic Part movie',
    'keyword': 'triceratops',
    'horns': 3
  },
  {
    'image_url': 'https://minnesota.publicradio.org/events/2013/11/a-beautiful-world/images/Narwhal3.jpg',
    'title': 'Narwhal swimming',
    'description': 'A narwhal swimming with the light shining through the water',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'http://www.hobbycraft.co.uk/supplyimages/623011_1000_1_800.jpg',
    'title': 'Pink Unicorn',
    'description': 'For when you need to die cut a unicorn',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://images-na.ssl-images-amazon.com/images/I/61MgJUG01KL._SX346_BO1,204,203,200_.jpg',
    'title': 'Unicorn Notebook',
    'description': 'Really, what could be better than unicorns, donuts, and ice cream all in one notebook?!',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://cdn.shopify.com/s/files/1/1420/6660/products/Narwal_2.jpg?v=1527714893',
    'title': 'Norman the Narwhal',
    'description': 'He\'s cute, he\'s a plush!',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://cdn.shopify.com/s/files/1/1420/6660/products/Unicorn_Front_little_bigger_2048x2048.jpg?v=1517539703',
    'title': 'Cupcake the Unicorn',
    'description': 'Because Norman the Narwhal needs friends',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://images-na.ssl-images-amazon.com/images/I/91i3QWg3vWL._UL1500_.jpg',
    'title': 'Unicorn Head',
    'description': 'What better way to scare people than with a strange unicorn head mask',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://www.maxpixel.net/static/photo/1x/Sky-Head-Giraffe-Animal-Portrait-3430849.jpg',
    'title': 'Giraffe',
    'description': 'This giraffe is as tall as the sky',
    'keyword': 'giraffe',
    'horns': 2
  },
  {
    'image_url': 'https://i.pinimg.com/originals/34/b8/4f/34b84f9b61883e69181d81f21d8f1a2d.jpg',
    'title': 'Trotting rhino',
    'description': 'He has a little bit of pep in his step',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://www.asianscientist.com/wp-content/uploads/bfi_thumb/Markhor-Goat-Species-Makes-Comeback-In-Pakistanj-2sdpf8o7u9d8lby3t6rif4.jpg',
    'title': 'Markhor family',
    'description': 'Seriously those horns are amazing',
    'keyword': 'markhor',
    'horns': 2
  },
  {
    'image_url': 'https://media.mnn.com/assets/images/2015/05/saiga-antelope-lead.jpg.653x0_q80_crop-smart.jpg',
    'title': 'Saiga',
    'description': 'These poor guys are on the critically endangered list',
    'keyword': 'saiga',
    'horns': 2
  },
  {
    'image_url': 'http://assets.panda.org/img/original/saiga_antelope_wwfwallpaper.jpg',
    'title': 'Saiga',
    'description': 'They\'re like a camel and an antelope in one',
    'keyword': 'saiga',
    'horns': 2
  },
  {
    'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mouflon_in_zoo.jpg/1200px-Mouflon_in_zoo.jpg',
    'title': 'Mouflons in the snow',
    'description': 'It is believed that the mouflon is the ancestor for all domesticated sheep breeds',
    'keyword': 'mouflon',
    'horns': 2
  },
  {
    'image_url': 'http://www.californiaherps.com/lizards/images/cjacksonimbmale.jpg',
    'title': 'Jackson\'s Chameleon',
    'description': 'Almost looks like he\'s smiling. I wouldn\'t want to get into a fight with him!',
    'keyword': 'chameleon',
    'horns': 2
  },
  {
    'image_url': 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/37/4s/p0374s1h.jpg',
    'title': 'Horned Lizard',
    'description': 'They can shoot blood out of their eyes as a defense mechanism',
    'keyword': 'lizard',
    'horns': 100
  },
  {
    'image_url': 'https://vignette.wikia.nocookie.net/harrypotter/images/3/3e/Horntail-prm.png/revision/latest?cb=20161208133543',
    'title': 'Hungarian Horntail from the Triwizard Tournament',
    'description': 'Never tickle a sleeping dragon',
    'keyword': 'dragon',
    'horns': 100
  }
]
