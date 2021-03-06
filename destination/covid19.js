const button = document.getElementById('click');
const type = document.getElementById('type');
// ボタンをクリックしたらイベント発動
button.addEventListener('click', () => {
  console.log("hey");
  fetch('https://api.opencovid.ca/summary?loc=canada&date=01-09-2020') // APIのURL
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      // 取得したURLをスラッシュ記号で分割し、犬種を表した要素を取得する
      const data = myJson['summary'][0]
      console.log(data);
      matchData = data.active_cases
      type.innerText = matchData;
      button.innerText = 'わんわんお！'
    });
});