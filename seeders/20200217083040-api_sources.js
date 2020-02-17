'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('api_sources', [
            {
                api_code : 'amadeus',
                api_name : 'Amadeus',
                end_point: 'http://...',
                status_id: 3
            },
            {
                api_code : 'travelport',
                api_name : 'Travel Port',
                end_point: 'http://...',
                status_id: 3
            }
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('api_sources', null, {});
    }
};
