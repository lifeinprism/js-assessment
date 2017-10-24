exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var matchIndex = -1;
    _.each(arr, (value, index) => {
      if (item === value) {
        matchIndex = index;
      }
    })
    return matchIndex;
  },

  sum: function(arr) {
    return _.reduce(arr, (total, current) => {
      return total + current;
    }, 0)

  },

  remove: function(arr, item) {
    var arrCopy = arr.slice(0);
    while (_.contains(arrCopy, item)) {
      _.each(arrCopy, (value, index) => {
        if (value === item) {
          arrCopy.splice(index, 1)
        }
      })
    }
    return arrCopy;
  },

  removeWithoutCopy: function(arr, item) {
    while (_.contains(arr, item)) {
      _.each(arr, (value, index) => {
        if (value === item) {
          arr.splice(index, 1)
        }
      })
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;

  },

  concat: function(arr1, arr2) {
    arr1.push.apply(arr1, arr2)
    return arr1;

  },

  insert: function(arr, item, index) {
    var arrCopy = arr.slice(0);
    arrCopy.splice(index, 0, item);
    return arrCopy;
  },

  count: function(arr, item) {
    return _.reduce(arr, (total, current) => {
      if (current === item) {
        total++;
      }
      return total;
    }, 0)
  },

  duplicates: function(arr) {
    var uniqueListOfDuplicates = new Set();
    _.each(arr, item => {
      if (arr.lastIndexOf(item) !== arr.indexOf(item)) {
        uniqueListOfDuplicates.add(item);
      }
    })
    return Array.from(uniqueListOfDuplicates).sort();
  },

  square: function(arr) {
    var doubledArr = _.map(arr, item => item ** 2);
    return doubledArr;
  },

  findAllOccurrences: function(arr, target) {
    var indexOfTarget = [];
    _.each(arr, (item, index) => {
      if (item === target) {
        indexOfTarget.push(index);
      }
    })
    return indexOfTarget;
  }
};
