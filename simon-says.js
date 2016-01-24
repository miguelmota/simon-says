(function(root) {
  'use strict';

  function SimonSays(options) {
    if (!(this instanceof SimonSays)) {
      return new SimonSays(options);
    }

    if (!(options instanceof Object)) {
      options = {};
    }

    this._options = options;
    this._sequence = this._options.sequence || [];
    this._choices = [SimonSays.GREEN, SimonSays.RED, SimonSays.YELLOW, SimonSays.BLUE];
    this._rounds = [];
    this._currentRound = 0;
  }

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
    this._rounds.push(this._sequence.slice(0, this._currentRound + 1));
    return this.getCurrentRound();
  };

  SimonSays.prototype.restart = function() {
    var newGame = new SimonSays(this._options);

    for (var prop in newGame) {
      this[prop] = newGame[prop];
    }

    return this.start();
  };

  SimonSays.prototype.nextRound = function() {
    this._rounds.push(this._sequence.slice(0, ++this._currentRound + 1));
    return this.getCurrentRound();
  };

  SimonSays.prototype.getCurrentRound = function() {
    return this._rounds[this._currentRound];
  };

  SimonSays.prototype.getCurrentRoundNumber = function() {
    return this._currentRound + 1;
  };

  SimonSays.prototype.checkRound  = function(choices) {
    var normalizeChoices = this._normalizeChoices(choices);
    return normalizeChoices.toString() === this.getCurrentRound().toString();
  };

  SimonSays.GREEN = 'GREEN';
  SimonSays.RED = 'RED';
  SimonSays.YELLOW = 'YELLOW';
  SimonSays.BLUE = 'BLUE';

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
