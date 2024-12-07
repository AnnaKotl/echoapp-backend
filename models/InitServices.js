const mongoose = require('mongoose');
const Service = require('./Service');
const connectDB = require('../config/db');

const initialServices = [
    {
        name: 'Junior',
        description: 'UI/UX Design, Develop, QA, Source code',
        features: ['UI/UX Design', 'Develop', 'QA', 'Source code'],
        price: 'from 1000$',
    },
    {
        name: 'Middle',
        description: 'UI/UX Design, Develop, QA, Source code, Publishing...',
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Publishing',
            '14 days support',
        ],
        price: 'from 1400$',
    },
    {
        name: 'Senior',
        description: 'UI/UX Design, Develop, QA, Source code, 20 days support...',
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Publishing',
            '20 days support',
        ],
        price: 'from 2500$',
    },
    {
        name: 'Lead',
        description: 'UI/UX Design, Develop, QA, Source code, Appstore traffic...',
        features: [
            'UI/UX Design',
            'Develop',
            'QA',
            'Source code',
            'Appstore traffic',
            '30 days support',
        ],
        price: 'from 5000$',
    },
    {
        name: 'Enterprise',
        description: 'Project flow of 10+ projects per week. Contact us.',
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