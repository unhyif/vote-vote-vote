class Operation {
  sort(arr, key) {
    return arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }
      return 0;
    });
  } // TODO: merge sort

  getTrophyOrNot(num) {
    switch (num) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return num;
    }
  }
}

export default Operation;
