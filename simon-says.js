(function(root) {
  'use strict';

  function SimonSays(options) {
    if (!(this instanceof SimonSays)) {
      return new SimonSays(options);
    }

    if (!(options instanceof Object)) {
      options = {};
    }

    this.options = options;
    this.sequence = this.options.sequence || [];
    this.choices = [SimonSays.GREEN, SimonSays.RED, SimonSays.YELLOW, SimonSays.BLUE];
    this.rounds = [];
    this.currentRound = 0;
  }

  SimonSays.GREEN = 'GREEN';
  SimonSays.RED = 'RED';
  SimonSays.YELLOW = 'YELLOW';
  SimonSays.BLUE = 'BLUE';

  SimonSays.prototype._normalizeChoices = function(choices) {
    if (!Array.isArray(choices)) {
      return [];
    }

    return choices.map(function(choice) {
      if (typeof choice === 'string') {
        return choice.toUpperCase();
      }

      return choice;
    });
  };

  SimonSays.prototype.start = function() {
    this.rounds.push(this.sequence.slice(0, this.currentRound + 1));
    return this.getCurrentRound();
  };

  SimonSays.prototype.nextRound = function() {
    this.rounds.push(this.sequence.slice(0, ++this.currentRound + 1));
    return this.getCurrentRound();
  };

  SimonSays.prototype.getCurrentRound = function() {
    return this.rounds[this.currentRound];
  };

  SimonSays.prototype.checkRound  = function(choices) {
    var normalizeChoices = this._normalizeChoices(choices);
    return normalizeChoices.toString() === this.getCurrentRound().toString();
  };

  SimonSays.prototype.getCurrentRoundNumber = function() {
    return this.currentRound + 1;
  };

  SimonSays.prototype.restart = function() {
    var newGame = new SimonSays(this.options);

    for (var prop in newGame) {
      this[prop] = newGame[prop];
    }

    return this.start();
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = SimonSays;
    }
    exports.SimonSays = SimonSays;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return SimonSays;
    });
  } else {
    root.SimonSays = SimonSays;
  }

})(this);
