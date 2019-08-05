export { };
const mongoose = require('mongoose');
const config = require('../config/config');
const log = require('../helpers/log');

const dbUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    log.success(`Mongoose default connection is open to: ${dbUrl}`);
    mongoose.connection.db.listCollections({name: 'pokemons'})
    .next((err, exists) => {
        if (!exists) {
            const fs = require('fs');
            const path = require('path');
            const JSONStream = require('JSONStream');
            const dbDumpPath = path.join(__dirname, '../../../src/seeders/pokemon_db.json');
            const Pokemon = require('./pokemon.model');
            const startTime = Date.now();
            const readStream = fs.createReadStream(dbDumpPath);
            readStream.pipe(JSONStream.parse('*'))
                .on('data', (chunk) => {
                    new Pokemon(chunk).save();
                });
            readStream.on('end', () => {
                const timeTaken = Date.now() - startTime;
                log.success(`Import completed in ${timeTaken} milisecconds, closing connection...`);
                mongoose.connection.close();
            });
        }
    });
});

mongoose.connection.on('error', (err) => {
    log.error(`Mongoose default connection has occured ${err} error`);
});

mongoose.connection.on('disconnected', () => {
    log.info('Mongoose default connection is disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        log.warning('Mongoose default connection is disconnected due to application termination');
        process.exit(0)
    });
});

module.exports = { mongoose };
