function mergeInternal(i1, i2) {
    return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
  }
  
  function isOverlap(i1, i2) {
    return !(
      Math.max(i1[0], i1[1]) < Math.min(i2[0], i2[1]) ||
      Math.max(i2[0], i2[1]) < Math.min(i1[0], i1[1])
    );
  }
  
  function merge(intervals, merge) {
    var res = [];
    var isMerged = false;
  
    // merge ben trai
    if (merge[1] < intervals[0][0]) {
      intervals.unshift(merge);
      return intervals;
    } else if (merge[0] > intervals[intervals.length - 1][1]) {
      // merge ben phai
      intervals.push(merge);
      return intervals;
    }
  
    // truong hop tong quat
    for (let i = 0; i < intervals.length; i += 1) {
      var currentInterval = intervals[i];
  
      if (isOverlap(currentInterval, merge)) {
        merge = mergeInternal(merge, currentInterval);
        isMerged = true;
      } else {
        if (isMerged) {
          res.push(merge);
          isMerged = false;
        }
        res.push(currentInterval);
      }
    }
  
    if (isMerged) {
      res.push(merge);
    }
  
    return res;
  }
  
  // test code
  console.log(merge([[1, 2], [3, 5], [10, 11]], [6, 9]));