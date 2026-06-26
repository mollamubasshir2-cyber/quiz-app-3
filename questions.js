const quiz = [
  {
    q: "বাংলাদেশের রাজধানী কী?",
    o: ["চট্টগ্রাম", "ঢাকা", "খুলনা", "রাজশাহী"],
    a: 1
  },
  {
    q: "২ + ২ = ?",
    o: ["৩", "৪", "৫", "৬"],
    a: 1
  },
  {
    q: "বাংলাদেশের জাতীয় ফুল কী?",
    o: ["গোলাপ", "শাপলা", "জবা", "বেলি"],
    a: 1
  },
  {
    q: "বাংলাদেশের জাতীয় ফল কী?",
    o: ["আম", "কাঁঠাল", "লিচু", "কলা"],
    a: 1
  },
  {
    q: "পৃথিবীর বৃহত্তম মহাসাগর কোনটি?",
    o: ["আটলান্টিক", "ভারত", "প্রশান্ত", "আর্কটিক"],
    a: 2
  }
];

let current = 0;
let score = 0;

const question = document.getElementById("question");
const buttons = [
  document.getElementById("b0"),
  document.getElementById("b1"),
  document.getElementById("b2"),
  document.getElementById("b3")
];
const scoreBox = document.getElementById("score");

function loadQuestion() {
  if (current >= quiz.length) {
    question.innerHTML = "কুইজ শেষ!";
    buttons.forEach(b => b.style.display = "none");
    scoreBox.innerHTML = "আপনার স্কোর: " + score + "/" + quiz.length;
    return;
  }

  question.innerHTML = quiz[current].q;

  buttons.forEach((btn, i) => {
    btn.innerHTML = quiz[current].o[i];
    btn.onclick = () => {
      if (i === quiz[current].a) score++;
      current++;
      loadQuestion();
    };
  });
}

loadQuestion();