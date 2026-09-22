// メモ機能
// メモ欄に記入して追加ボタンで下にメモが追加される。バツボタンで削除。
const memoText = document.getElementById('memoText');
if (memoText) {
  memoText.addEventListener('input', function () {
    localStorage.setItem('historyMemo', this.value);
  });
  memoText.value = localStorage.getItem('historyMemo') || '';
}
