const Fruit = require('../server/db/models/fruit')
const AuthUser = require('../server/db/models/authUser')
const db = require('../server/db/db')
const {green} = require('chalk')

const fruits = [
  {
    name: 'banana',
    price: 1.0,
    description: 'A yellow tropical fruit.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/2560px-Bananas.svg.png',
    quantity: 10
  },
  {
    name: 'raspberry',
    price: 0.5,
    description: 'A red berry fruit.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Raspberries04.jpg',
    quantity: 30
  },
  {
    name: 'mango',
    price: 5.0,
    description: 'An orange tropical fruit.',
    imageUrl:
      'http://www.dreams.metroeve.com/wp-content/uploads/2017/10/www.dreams.metroeve.com-mango-dreams-meaning.jpg',
    quantity: 6
  },
  {
    name: 'orange',
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
    description: 'Refreshing!',
    imageUrl:
      'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?cs=srgb&dl=food-fruit-green-1313267.jpg&fm=jpg',
    quantity: 11
  },
  {
    name: 'Kiwi',
    price: 0.75,
    description: 'A green fruit.',
    imageUrl:
      'https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=food-fresh-fruit-51312.jpg&fm=jpg',
    quantity: 7
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

async function seed() {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    const [fruit, user] = await Promise.all([
      Fruit.bulkCreate(fruits, {returning: true}),
      AuthUser.bulkCreate(users, {returning: true})
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
