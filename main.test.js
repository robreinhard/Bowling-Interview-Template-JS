import {expect, test} from "@jest/globals";

import Game from "./Game.js";

test('Roll strikes 1st-9th inning, then a 0 followed by a 9', () => {
    const game = new Game();

    for (let inning = 1; inning <= 9; inning++) {
        game.roll(10);
    }

    game.roll(0);
    game.roll(9);

    expect(game.score()).toEqual(258);
})

test('Roll strikes 1st-9th inning, then a 9 followed by a 0', () => {
    const game = new Game();

    for (let inning = 1; inning <= 9; inning++) {
        game.roll(10);
    }

    game.roll(9);
    game.roll(0);

    expect(game.score()).toEqual(267);
})