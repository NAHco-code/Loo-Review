const { Loo } = require('../models');

const looData = [
    {
        location: '',

        location_descr: 'back left',
        type: {
            capacity: 1,
            spec_gend: [
                { female: true, male: false, neutral: false, family: false }
            ]
        },
        categories: {
            accessible: false,
            amenities: [
                { shower: true, storage: true, seating: true, hygiene_products: true }
            ],
            clean: true,
            cool_factor: true,
            privacy: true,
            safety: true,
            stocked: true,
            long_wait_time: false
        }
    },
]
