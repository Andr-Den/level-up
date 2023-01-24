const comments = [
  {
    image: '',
    name: 'Николай Михайлович Ильяшенко',
    text: 'Получаем постоянное внимание со стороны менеджеров - при том, что нам редко требуются какие-либо работы по сайту на BLIZKO, ассортимент у нас стабильный, цены договорные. Размещаемся мы на BLIZKO только в Краснодаре, а заявки к нам поступают и из Хабаровска, и из Калининграда - мы продаем высокотехнологичные полимеры для ремонта и защиты различных материалов, таких сайтов всего несколько в стране, поэтому нас отлично находят.',
  },
  {
    image: '',
    name: 'Сайдмагомедова Яна Сергеевна',
    text: 'Нам нравится работа всех сотрудников, с которыми мы успели поработать за несколько лет. Нам всегда оперативно отвечают и помогают. Что касается сайта, то с ним довольно удобно работать, все интуитивно понятно. По выдаче: в поисковие blizko.ru по многим нашим ключевым запросам мы в первых строках, это большой плюс.',
  },
]

let commentImage = document.getElementById("comment-image");
let commentName = document.getElementById("comment-name");
let commentText = document.getElementById("comment-text");


commentImage.innerHTML = `${comments[0].image}`
commentName.innerHTML = `${comments[0].name}`
commentText.innerHTML = `${comments[0].text}`

let next = document.getElementById("next");
let back = document.getElementById("back");

let value = 0

next.onclick = function() {
  if (value === 1) {
    value = 0
  } else {
    value++
  }
  commentImage.innerHTML = `${comments[value].image}`
  commentName.innerHTML = `${comments[value].name}`
  commentText.innerHTML = `${comments[value].text}`
}

back.onclick = function() {
  if (value === 0) {
    value = 1
  } else {
    value--
  }
  commentImage.innerHTML = `${comments[value].image}`
  commentName.innerHTML = `${comments[value].name}`
  commentText.innerHTML = `${comments[value].text}`
}

