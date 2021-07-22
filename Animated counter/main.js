function numberAnimCount() {
  let counter = document.querySelectorAll('.count-number');
  
  counter.forEach((elem) => {
    const time = 1000;
    let limit = +(elem.dataset.limit);
    
    if (limit <= 10) {
      var step = 1;   
    } else if (limit > time){
      var step = 100;
    } else {
      var step = 1;
    };
    
    let count = 0;
    let t = Math.round(time / (limit / step));
    let interval = setInterval(() => {
      count = count + step;
      if (count >= limit) {
        count = limit;
        clearInterval(interval);
      }
      elem.textContent = count;
    }, t);
  });
}

numberAnimCount();
