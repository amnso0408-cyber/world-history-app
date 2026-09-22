const chapter3Status = document.getElementById('chapter3Status');
if (localStorage.getItem('chapterFinish') === 'done') {
  chapter3Status.textContent = '✔︎ 完了';
}
