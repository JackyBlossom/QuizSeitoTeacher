(()=>{
const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機はどれ？',
    answers:[
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'プレイステーション２'
  },  {
    question: '糸井重里が規格に携わった、任天堂の看板ゲームはどれ？',
    answers:[
      'MOTHER2',
      'スパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  },  {
    question: 'ファイナルファンタジーⅣの主人公は次の内誰？',
    answers:[
      'ティーダ',
      'ソラ',
      'クラウド',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // 定数の文字列をHTMLに反映させる
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    // ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// クリックによる動作を定義
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解率は' + score + '/' + quizLength + 'です！');
  }
};
//ボタンをクリックすると正誤判定 
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) =>{
    clickHandler(e);
  });
  handlerIndex++;
};
})();