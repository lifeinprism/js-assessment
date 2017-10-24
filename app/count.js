exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var counter = [];
    for (start; start < end; start++) {
      counter.push(start);
    }
    return counter;
};
