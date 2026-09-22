const choiceBtn = document.querySelectorAll('.choiceBtn');
for (let i = 0; i < choiceBtn.length; i++) {
  choiceBtn[i].addEventListener('click', function () {
    for (let j = 0; j < choiceBtn.length; j++) {
      choiceBtn[j].style.backgroundColor = '#fff8ec';
    }
    this.style.backgroundColor = 'green';
  });
}

const answerBtn = document.getElementById('answerBtn');
const answerText = document.getElementById('answerText');

let selectedAnswer = '';

choiceBtn[0].addEventListener('click', function () {
  selectedAnswer = 'A';
});
choiceBtn[1].addEventListener('click', function () {
  selectedAnswer = 'B';
});
choiceBtn[2].addEventListener('click', function () {
  selectedAnswer = 'C';
});
choiceBtn[3].addEventListener('click', function () {
  selectedAnswer = 'D';
});

answerBtn.addEventListener('click', function () {
  if (selectedAnswer === 'A') {
    answerText.textContent;
    ('正解だにゃ！　答え：A　 ウルバヌス2世はクレルモン公会議で十字軍遠征を呼びかけました。');
  } else {
    answerText.textContent =
      '不正解!!　答え：A　 ウルバヌス2世はクレルモン公会議で十字軍遠征を呼びかけました。';
  }
  localStorage.setItem('chapterFinish', 'done');
});
