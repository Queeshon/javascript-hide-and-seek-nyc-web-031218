function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelectorAll("#grand-node div div div div")[0]
}

function increaseRankBy(n) {
  const rl = document.querySelectorAll("ul.ranked-list li")

  for (let i = 0; i < rl.length; i++){
    rl[i].innerHTML = (parseInt(rl[i].innerHTML) + n).toString()
  }
}
