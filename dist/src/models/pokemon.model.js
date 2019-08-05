"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pokemonSchema = Schema({
    id: Number,
    num: String,
    name: String,
    img: String,
    type: Schema.Types.Mixed,
    height: String,
    weight: String,
    candy: String,
    candy_count: Number,
    egg: String,
    spawn_chance: Number,
    avg_spawns: Number,
    spawn_time: String,
    multipliers: Schema.Types.Mixed,
    weaknesses: Schema.Types.Mixed,
    prev_evolution: Schema.Types.Mixed,
    next_evolution: Schema.Types.Mixed
}, {
    versionKey: false
});
module.exports = mongoose.model('Pokemon', pokemonSchema);
