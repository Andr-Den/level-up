const comments = [
  {
    name: 'Александр Ф.',
    text: 'Доступный, эффективный и не очень дорогой препарат. Необязательно пить целый курс - можно принимать разово при необходимости.',
  },
  {
    name: 'Петр И.',
    text: 'Помогает практически сразу, длительный эффект.',
  },
  {
    name: 'Василий Н.',
    text: 'Эффект после первого приема',
  },
]

let commentImage = document.getElementById("comment-image");
let commentName = document.getElementById("comment-name");
let commentText = document.getElementById("comment-text");

commentImage.style.backgroundImage = `url(./images/1.jpeg)`
commentName.innerHTML = `${comments[0].name}`
commentText.innerHTML = `${comments[0].text}`

let next = document.getElementById("next");
let back = document.getElementById("back");

let value = 0

next.onclick = function() {
  if (value === 2) {
    value = 0
  } else {
    value++
  }
  commentImage.style.backgroundImage = `url(./images/${value+1}.jpeg)`
  commentName.innerHTML = `${comments[value].name}`
  commentText.innerHTML = `${comments[value].text}`
}

back.onclick = function() {
  if (value === 0) {
    value = 2
  } else {
    value--
  }
  commentImage.style.backgroundImage = `url(./images/${value+1}.jpeg)`
  commentName.innerHTML = `${comments[value].name}`
  commentText.innerHTML = `${comments[value].text}`
}

