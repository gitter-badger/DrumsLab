var Bar = function(bar) {
    this.bar = bar;
    this.numberOfbeat = bar.length;

    var length = 0
    this.bar.forEach(function (beat){
        length += beat.length;
    });
    this.length = length;
}


Bar.prototype.getScoreByIndex = function (index) {

    if (index >= this.length)
        throw new RangeError("Index can't be greater to bar's length");

    var finalScore = -1;

    this.bar.forEach(function (beat) {
        beat.forEach(function (score) {
            index--;
            if (index == 0) {
                finalScore = score;
                return;
            }
        });
        if (finalScore != -1)
            return;
    });

    return finalScore;
};


Bar.prototype.convertIndexIntoObject = function (index) {

    if (index >= this.length)
        throw new RangeError("Index can't be greater to bar's length");

    this.bar.forEach(function (beat, beatIndex) {
        beat.forEach(function (score, scoreIndex) {
            index--;
            if (index == 0)
                return {
                    beat : beatIndex,
                    score : scoreIndex
                };
        });
    });
};
