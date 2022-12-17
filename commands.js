// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties

db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne({
  name:'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eatin too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
})


// 2. Query for all bounties in the bounties collection
db.bounties.find()

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany ([
  {
    name: 'Polarwind',
    species: 'Polar Bear',
    location: 'Arctic',
    wantedFor: 'Not Hibernating',
    client: 'Sabertooth',
    reward: 4000,
    captured: false 
  },
  {
    name: 'Lokinkajou',
    species: 'Kinkajou',
    location: 'Tropical Rainforest',
    wantedFor: 'Partying too late at night',
    client: 'White Tiger',
    reward: 1000,
    captured: false 
  },
  {
    name: 'Nebullama',
    species: 'Llama',
    location: 'Grasslands',
    wantedFor: 'Drinking all the water from the ocean',
    client: 'Songbird',
    reward: 2500,
    captured: false 
  },
  {
    name: 'Wrecking Crows',
    species: 'Crow',
    location: 'Grasslands',
    wantedFor: 'Cawwing too loudly',
    client: 'Red Wolf',
    reward: 40000,
    captured: false 
  },
  {
    name: 'Grandhog',
    species: 'Groundhog',
    location: 'Woodlands',
    wantedFor: 'Not coming out of the hole on time/ Prolonged winter',
    client: 'Songbird',
    reward: 50000,
    captured: false
  },
  {
    name: 'Grim Panda',
    species: 'Giant Panda',
    location: 'Temperate Forest',
    wantedFor: 'Eating all the bamboo',
    client: 'Red Wolf',
    reward: 5000,
    captured: false 
  }
])
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location: 'Grasslands'})
// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({reward: {$gte: 10000} })
// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find( {} , {client=0})
// 4. Query for a Groundhog in the Woodlands
db.bounties.find({spedies: 'Groundhog' , loaction: 'Woodlands'})
// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne({name: 'Polarwind'}, {$set:{reward:10000}})
// 2. Remove Lokinkajou
db.bounties.deleteOne({name: 'Lokinkajou'})
// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client: 'Songbird'})
// 4. Update all captured statuses to true
db.bounties.updateMany({}, {$set:{captued: true}})