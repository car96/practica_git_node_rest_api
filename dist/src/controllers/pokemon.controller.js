"use strict";
const Pokemon = require('../models/pokemon.model');
exports.all = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.random = (req, res) => {
    Pokemon
        .count()
        .exec((err, count) => {
        let random = Math.floor(Math.random() * count);
        Pokemon
            .findOne({}, { '_id': 0 })
            .skip(random)
            .exec((err, pokemon) => {
            if (err)
                return res
                    .status(500)
                    .send(err);
            if (pokemon)
                return res
                    .status(200)
                    .send(pokemon);
        });
    });
};
exports.byName = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.byId = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.sortedBy = (req, res) => {
    const { sorting } = req.params;
    const sortingOptions = [
        'asc',
        'ascending',
        'desc',
        'descending'
    ];
    if (!sortingOptions.includes(sorting))
        return res
            .status(400)
            .send(`Allowed sorting options are: ${sortingOptions}`);
    Pokemon
        .find({}, { '_id': 0 })
        .sort({ 'id': sorting })
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.paginated = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.byType = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.byWeaknesses = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.withEvolutions = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.withoutEvolutions = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
exports.byAttributes = (req, res) => {
    Pokemon
        .find({}, { '_id': 0 })
        .sort('id')
        .exec((err, pokemons) => {
        if (err)
            return res
                .status(500)
                .send(err);
        if (pokemons)
            return res
                .status(200)
                .send(pokemons);
    });
};
