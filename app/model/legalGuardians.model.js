module.exports = (sequelize, Sequelize) => {
    const LegalGuardians = sequelize.define('legalGuardians', {
        name: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.TEXT
        },
        nif: {
            type: Sequelize.STRING
        }
    });
    return LegalGuardians;
}