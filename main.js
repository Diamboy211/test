var array = []

function viusals() {
  
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let antirecord = 2000000000;
    let selected = 0;
    for (let j = i; j < array.length; i++) {
      if (array[j] < antirecord) {
        antirecord = array[j];
        selected = j;
      }
    let temp = array[i];
    array[i] = array[selected];
    array[selected] = temp
  }
}
