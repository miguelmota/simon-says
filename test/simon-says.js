var test = require('tape');
var SimonSays = require('../simon-says');

test('SimonSays', function (t) {
  'use strict';

  t.plan(19);

  var game = new SimonSays({
    sequence: [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW, SimonSays.RED, SimonSays.GREEN, SimonSays.GREEN, SimonSays.BLUE]
  });

  var sequence = game.start();
  t.deepEqual(sequence, [SimonSays.GREEN]);

  t.deepEqual(game.getCurrentRoundNumber(), 1);

  var userInput = [SimonSays.GREEN];
  t.equal(game.checkRound(userInput), true);

  sequence = game.nextRound();
  t.deepEqual(sequence, [SimonSays.GREEN, SimonSays.BLUE]);

  t.deepEqual(game.getCurrentRoundNumber(), 2);

  userInput = [SimonSays.GREEN, SimonSays.BLUE];
  t.equal(game.checkRound(userInput), true);

  sequence = game.nextRound();
  t.deepEqual(sequence, [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE]);

  t.deepEqual(game.getCurrentRoundNumber(), 3);

  userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE];
  t.equal(game.checkRound(userInput), true);

  sequence = game.nextRound();
  t.deepEqual(sequence, [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED]);

  t.deepEqual(game.getCurrentRoundNumber(), 4);

  userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED];
  t.equal(game.checkRound(userInput), true);

  sequence = game.nextRound();
  t.deepEqual(sequence, [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW]);

  t.deepEqual(game.getCurrentRoundNumber(), 5);

  // Got it wrong!
  userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.GREEN];
  t.equal(game.checkRound(userInput), false);

  t.deepEqual(game.getCurrentRound(), [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW]);

  sequence = game.restart();
  t.deepEqual(sequence, [SimonSays.GREEN]);

  t.deepEqual(game.getCurrentRoundNumber(), 1);

  userInput = [SimonSays.GREEN];
  t.equal(game.checkRound(userInput), true);
});
