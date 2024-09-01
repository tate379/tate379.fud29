'use strict'

//イベントの追加
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  //カテゴリーの取得
  const selectedCategory = document.getElementById('categorySelect').value;
  //種類の取得
  const selectedSize = document.getElementById('typeSelect').value;
  //関数の実行
  openReport(selectedCategory, selectedSize);
});


function openReport(category, type) {
  const filePaths = {
    blueprints: {
      carA: './帳票/設計図_車種A.pdf',
      carB: './帳票/設計図_車種B.pdf',
      carC: './帳票/設計図_車種C.pdf'
    },
    workdrawings: {
      carA: './帳票/工作図_車種A.pdf',
      carB: './帳票/工作図_車種B.pdf',
      carC: './帳票/工作図_車種C.pdf'
    },
    partdrawings: {
      carA: './帳票/部品図_車種A.pdf',
      carB: './帳票/部品図_車種B.pdf',
      carC: './帳票/部品図_車種C.pdf'
    }
  };
  //ファイルがあるか調べる、ない場合はnullにする
  const filePath = filePaths[category] ? filePaths[category][type] : null;
  if (filePath) {
    //ファイルを開く
    window.open(filePath, '_blank');
  } else {
    //htmlのresultsに表示
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>帳票が選択されていないか、存在しません。</p>';
  }
}

