export { };
const express = require('express');
const router = express.Router();

const pokemon = require('../controllers/pokemon.controller');

router.get('/pokemons', pokemon.all);
router.get('/pokemons/sorted/:sorting', pokemon.sortedBy);
router.get('/pokemons/paginated/:page/:limit/:offset?', pokemon.paginated);
router.get('/pokemon/random', pokemon.random);
router.get('/pokemon/name/:name', pokemon.byName);
router.get('/pokemon/id/:id', pokemon.byId);
router.get('/pokemon/type/:type[]', pokemon.byType);
router.get('/pokemon/weaknessees/:weaknessees[]', pokemon.byWeaknesses);
router.get('/pokemon/with-evolutions', pokemon.withEvolutions);
router.get('/pokemon/without-evolutions', pokemon.withoutEvolutions);
router.get('/pokemon/attributes/:attributes[]', pokemon.byAttributes);

module.exports = router