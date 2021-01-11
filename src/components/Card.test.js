import test from "ava";

import {
  FindPokemonHP,
  FindPokemonStrength,
  FindPokemonWeaknesses,
  FindPokemonCuteRank,
} from "./Card";

test("FindPokemonHP -> actual HP more than maximum", (t) => {
  const val = FindPokemonHP(150);
  t.is(val, 100);
});

test("FindPokemonHP -> actual HP is less than minimum", (t) => {
  const val = FindPokemonHP(-10);
  t.is(val, 0);
});

test("FindPokemonStrength -> strength more than maximum", (t) => {
  const val = FindPokemonStrength([{}, {}, {}, {}]);
  t.is(val, 100);
});

test("FindPokemonStrength -> attack is empty array", (t) => {
  const val = FindPokemonStrength([]);
  t.is(val, 0);
});

test("FindPokemonWeaknesses -> weaknesses more than maximum", (t) => {
  const val = FindPokemonWeaknesses([{}, {}, {}]);
  t.is(val, 100);
});

test("FindPokemonWeaknesses -> weaknesses is empty array", (t) => {
  const val = FindPokemonWeaknesses([]);
  t.is(val, 0);
});

//((HP / 10) + (Damage /10 ) + 10 - (Weakness)) / 5;
test("FindPokemonCuteRank", (t) => {
  const val = FindPokemonCuteRank(
    120,
    [{ damage: "30" }, { damage: "10" }],
    100
  );
  t.is(val, -14.8);
});

test("FindPokemonCuteRank -> test with Cubone", (t) => {
  const val = FindPokemonCuteRank(
    60,
    [{ damage: "10" }, { damage: "20x" }],
    100
  );
  t.is(val, -16.2);
});
