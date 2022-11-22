const animateSpinner = function(array) {
  let index = 100;

  for (let char = 0; char < array.length; char++) {

    setTimeout(() => {
      process.stdout.write(array[char]);
    }, index);
    index += 200;
  }
};
animateSpinner(['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|', '\n']);
