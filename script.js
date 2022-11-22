window.addEventListener("load", (event) => {
  const buttonStart = document.querySelector('.button-start');
  const buttonStop = document.querySelector('.button-stop');
  const buttonMinus = document.querySelector('.btn-minus');
  const buttonPlus = document.querySelector('.btn-plus');

  const shapes = {
      'circle': `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="${getRandomInt(50, 90)}" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88" xml:space="preserve">
                    <path fill="${getRandomColor()}" fill-rule="evenodd" clip-rule="evenodd" d="M61.438,0c33.93,0,61.441,27.512,61.441,61.441 c0,33.929-27.512,61.438-61.441,61.438C27.512,122.88,0,95.37,0,61.441C0,27.512,27.512,0,61.438,0L61.438,0z"/>
                  </svg>`,
      'square': `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="${getRandomInt(50, 90)}" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve">
                    <path fill="${getRandomColor()}" fill-rule="evenodd" clip-rule="evenodd" d="M13.002,0h96.878c7.15,0,13.002,5.851,13.002,13.002v96.877 c0,7.151-5.852,13.002-13.002,13.002H13.002C5.851,122.882,0,117.031,0,109.88V13.002C0,5.851,5.851,0,13.002,0L13.002,0z"/>
                  </svg>`,
      'triangle': `<svg xmlns="http://www.w3.org/2000/svg" width="${getRandomInt(50, 90)}" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 345.51">
                    <path fill="${getRandomColor()}" fill-rule="nonzero" d="M3.95 314.94 240.74 7.7c1.02-1.39 2.24-2.65 3.67-3.75 8.27-6.39 20.17-4.87 26.56 3.41l236.11 306.4c3.06 3.37 4.92 7.84 4.92 12.75 0 10.49-8.51 19-19 19H18.93v-.06a18.9 18.9 0 0 1-11.57-3.95c-8.28-6.39-9.8-18.29-3.41-26.56z"/>
                  </svg>`
  };

  function createShape(shapename) {
    let span = document.createElement('span');
    let topPanel = document.querySelector('.top-panel');
    span.innerHTML = shapes[shapename];
    topPanel.append(span);
  }

  createShape('circle');
  createShape('square');
  createShape('triangle');

  buttonStart.addEventListener('click', () => {
    buttonMinus.disabled = false;
    buttonPlus.disabled = false;
  });

  buttonStop.addEventListener('click', () => {
    buttonMinus.disabled = true;
    buttonPlus.disabled = true;
  });

  buttonPlus.addEventListener('click', () => {
    createShape('circle');
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
