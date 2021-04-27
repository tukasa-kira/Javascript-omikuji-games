'use strict';

function draw() {
  const results = [
    '大吉',
    '中吉',
    '小吉',
    '凶'
  ]
  const key = Math.floor(Math.random() * 4)
  console.log(key);
  const fortune = document.getElementById("fortune")
  fortune.textContent = results[key]
}

