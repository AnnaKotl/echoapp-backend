const mongoose = require('mongoose');
const Service = require('./Service');
const connectDB = require('../config/db');

const initialServices = [
    {
        name: 'Junior',
        features: ['UI/UX Design', 'Develop', 'QA', 'Source code'],
        price: 'from 1000$',
    },
    {
        name: 'Middle',
        description: ['You provide us with an apple developer account and a meta for the app store', '14 days support'],
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Publishing',
        ],
        price: 'from 1400$',
    },
    {
        name: 'Senior',
        description: ['20 days support'],
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Apple Developer Account',
            'Meta for AppStore',
            'Publishing',
        ],
        price: 'from 2500$',
    },
    {
        name: 'Lead',
        description: ['30 days support'],
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Apple Developer Account',
            'Meta for AppStore',
            'Publishing',
            'Appstore traffic',
        ],
        price: 'from 5000$',
    },
    {
        name: 'Enterprise',
        description: ['Project flow of 10+ projects per week'],
        features: ['Custom Project Management'],
        price: 'Contact us',
    },
];

const initializeServices = async () => {
    try {
        await connectDB();
        console.log('Connected to the database.');

        await Service.deleteMany();
        console.log('Existing services removed.');

        await Service.insertMany(initialServices);
        console.log('Services initialized successfully.');

        mongoose.connection.close();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error initializing services:', error);
        process.exit(1);
    }
};

initializeServices();


// Initialize servises ------ PRICES

// INIT ONSE ore for TEST ------- ❗️

// BEFORE PROD - DELETE --------- ❌