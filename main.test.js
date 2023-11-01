import {expect, test} from "@jest/globals";

import Game from "./Game.js";

test('Rolling all strikes, then a 9', () => {
    const game = new Game();

    for (let inning = 1; inning <= 9; inning++) {
        game.roll(10);
    }

    game.roll(9);

    expect(game.score()).toEqual(258);
})