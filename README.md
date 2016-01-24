# simon says

> Simon Says game logic in JavaScript.

# Demo

[http://lab.moogs.io/simon-says](http://lab.moogs.io/simon-says)

# Install

```bash
npm install simonsays
```

# Usage

```javascript
const SimonSays = require('simonsays');

var game = new SimonSays();

var sequence = game.start();
console.log(sequence); // [SimonSays.GREEN]

console.log(game.getCurrentRoundNumber()); // 1

var userInput = [SimonSays.GREEN];
console.log(game.checkRound(userInput)); // true

sequence = game.nextRound();
console.log(sequence); // [SimonSays.GREEN, SimonSays.BLUE]

console.log(game.getCurrentRoundNumber()); // 2

userInput = [SimonSays.GREEN, SimonSays.BLUE];
console.log(game.checkRound(userInput)); // true

sequence = game.nextRound();
console.log(sequence); // [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE]

console.log(game.getCurrentRoundNumber()); // 3

userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE];
console.log(game.checkRound(userInput)); // true

sequence = game.nextRound();
console.log(sequence); // [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED]

console.log(game.getCurrentRoundNumber()); // 4

userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED];
console.log(game.checkRound(userInput)); // true

sequence = game.nextRound();
console.log(sequence); // [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW]

console.log(game.getCurrentRoundNumber()); // 5

// Got it wrong!
userInput = [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.GREEN];
console.log(game.checkRound(userInput)); // false

console.log(game.getCurrentRound()); // [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW]

// Restart
sequence = game.restart();
console.log(sequence); // [SimonSays.GREEN]

console.log(game.getCurrentRoundNumber()); // 1

userInput = [SimonSays.GREEN];
console.log(game.checkRound(userInput)); // true
```

Use a predetermined sequence.

```javascript
var game = new SimonSays({
  sequence: [SimonSays.GREEN, SimonSays.BLUE, SimonSays.BLUE, SimonSays.RED, SimonSays.YELLOW, SimonSays.RED, SimonSays.GREEN, SimonSays.GREEN, SimonSays.BLUE]
});
```

# Test

```bash
npm test
```

# License

MIT
