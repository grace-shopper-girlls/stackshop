const {Fruit, User, Order, OrderItem} = require('../server/db/models/index')

const db = require('../server/db/db')
const {green} = require('chalk')

const fruits = [
  {
    name: 'Banana',
    price: 1.0,
    description: 'A yellow tropical fruit.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/2560px-Bananas.svg.png',
    quantity: 10
  },
  {
    name: 'Raspberry',
    price: 0.5,
    description: 'A red berry fruit.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Raspberries04.jpg',
    quantity: 30
  },
  {
    name: 'Mango',
    price: 5.0,
    description: 'An orange tropical fruit.',
    imageUrl: 'https://www.punmiris.com/himg/o.14680.jpg',
    quantity: 6
  },
  {
    name: 'Orange',
    price: 3.29,
    description: 'An delicously citrus fruit.',
    imageUrl:
      'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?cs=srgb&dl=citrus-close-up-delicious-161559.jpg&fm=jpg',
    quantity: 8
  },
  {
    name: 'Cherries',
    price: 1.85,
    description: 'As sweet as can be.',
    imageUrl:
      'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?cs=srgb&dl=berry-cherries-cherry-109274.jpg&fm=jpg',
    quantity: 2
  },
  {
    name: 'Watermelon',
    price: 6.7,
    description: 'A refreshing summer fruit!',
    imageUrl:
      'https://newschoolselling.com/wp-content/uploads/2017/08/watermelons-1030x824.jpg',
    quantity: 11
  },
  {
    name: 'Kiwi',
    price: 0.75,
    description: 'A green fruit.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
    quantity: 7
  },
  {
    name: 'Pineapple',
    price: 3.75,
    description: 'A sweet yellow fruit with a prickly skin.',
    imageUrl:
      'https://3.imimg.com/data3/EL/NB/MY-9608713/pine-apple-500x500.png',
    quantity: 15
  },
  {
    name: 'Pomegranate',
    price: 4.0,
    description: 'A fruit juicy and rich in flavor.',
    imageUrl:
      'https://3.imimg.com/data3/UK/OY/MY-9608713/pomegranates-500x500.png',
    quantity: 21
  },
  {
    name: 'Lime',
    price: 4.0,
    description:
      'This fruit, which contain vitamins, minerals and many other essential elements, are available throughout the year.',
    imageUrl:
      'https://3.imimg.com/data3/EV/DI/MY-9608713/sweet-lime-500x500.png',
    quantity: 16
  },
  {
    name: 'Apple',
    price: 2.33,
    description: 'A classic fruit available in a variety of colors.',
    imageUrl: 'https://3.imimg.com/data3/PG/SU/MY-9608713/apple-500x500.png',
    quantity: 5
  },
  {
    name: 'Grapes',
    price: 4.1,
    description: 'A bunchy fruit, available in green or red.',
    imageUrl:
      'http://www.suiderlandplase.co.za/wp-content/uploads/2014/08/products-grapes.png',
    quantity: 20
  }
]

const users = [
  {
    lastname: 'Zdansky',
    firstname: 'Lily',
    email: 'lzdansky@mail.bradley.edu',
    password: 'abcGH1902',
    imageurl: 'https://avatars3.githubusercontent.com/u/45503995?s=460&v=4',
    address: '141 Quincy Street, Brooklyn, NY 11216',
    salt: '',
    googleId: ''
  },
  {
    lastname: 'Strasser',
    firstname: 'Lindsay',
    email: 'lindsay.strasser@gmail.com',
    password: 'p@ssword',
    imageurl: 'https://avatars2.githubusercontent.com/u/22120272?s=460&v=4',
    address: '3044 29th St. Astoria, NY 11102',
    salt: '',
    googleId: ''
  },
  {
    lastname: 'Olascoaga',
    firstname: 'Sandra',
    email: 'sandrajanineo@gmail.com',
    password: '123456789S!',
    imageurl:
      'https://i.pinimg.com/originals/12/e3/0d/12e30d479f91425271d4cc8cfa8fcc99.jpg',
    address: '123 Mercedes Way Dr, Edgewood, NY 11717',
    salt: '',
    googleId: ''
  },
  {
    lastname: 'Gretchen',
    firstname: 'Opie',
    email: 'gretchenopie@gmail.com',
    password: '123456',
    imageurl:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Michele_Pace_Del_Campidoglio_-_Still-Life_with_a_Female_Figure_-_WGA16798.jpg',
    address: '349 Ocean Pkway, Brooklyn, NY 11218',
    salt: '',
    googleId: ''
  }
]

const orders = [
  {
    orderDate: '4 / 23 / 18',
    orderSubmitted: true,
    buyerName: 'Jane Doe',
    shippingAddress: '123 Mercedes Way, NY, NY 10002',
    billingAddress: '',
    email: 'janeDoe@yahoo.com',
    subtotal: 21.12,
    shippingCost: 1,
    grandTotal: 22.12
  },
  {
    orderDate: '4 / 23 / 18',
    orderSubmitted: false,
    buyerName: 'Joe Doe',
    shippingAddress: '123 Mercedes Way, NY, NY 10002',
    billingAddress: '',
    email: 'joeDoe@yahoo.com',
    subtotal: 100.16,
    shippingCost: 0,
    grandTotal: 100.16
  }
]

const ordersItems = [
  {
    price: 1,
    quantity: 1
  },
  {
    price: 2,
    quantity: 10
  }
]

async function seed() {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    const [fruit, user] = await Promise.all([
      Fruit.bulkCreate(fruits, {returning: true}),
      User.bulkCreate(users, {returning: true})
      // Order.bulkCreate(orders, {returning: true}),
      // OrderItem.bulkCreate(ordersItems, {returning: true})
    ])

    console.log(green('Seeding successful!!'))
    console.log(`seeded ${fruit.length} fruits`)
    console.log(`seeded ${user.length} users`)
  } catch (err) {
    console.log(err)
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.log(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
