const connection = require('./database/connection');
const mongoose = require('mongoose');
const Promise = require('bluebird');


const Bought = require('./database/boughtModel');
const Viewed = require('./database/viewedModel');

const usersViewed = [
  {
    productId: 1,
    photoURL: 'https://www.rei.com/media/product/101409?size=280',
    brandName: 'Manduka',
    itemName: 'Recycled Foam Yoga Block',
    itemRating: 4.3
  }
];

const usersBought = [
  {
    productId: 1,
    photoURL: 'https://www.rei.com/media/product/860616?size=280',
    brandName: 'Manduka',
    itemName: 'Recycled Foam Yoga Block',
    itemRating: 0
  }
];


const dropMongo = async () => {
  console.log('Clearing out models...');
  await Bought.deleteMany();
  await Viewed.deleteMany();
  console.log('Models cleared...');
};

const seedViewed = async () => {
  console.log('Seeding viewedModel...');
  try {
    await Viewed.insertMany(usersViewed);
    console.log('Success: Seeded viewedModel!...');
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const seedBought = async () => {
  console.log('Seeding boughtModel...');
  try {
    await Bought.insertMany(usersBought);
    console.log('Success: Seeded boughtModel!...');
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const seed = async () => {
  await dropMongo();
  await seedViewed();
  await seedBought();
};

const seeAll = async () => {
  try {
    console.log('Listing Documents... Bought ...');
    await Bought.find().then((results) => console.log(results));
    console.log('Listing Documents... Viewed ...');
    await Viewed.find().then((results) => console.log(results));
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const driver = async function() {
  await seed();
  await seeAll();
};

driver();