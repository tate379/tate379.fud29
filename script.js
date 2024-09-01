'use strict'

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedCategory = document.getElementById('categorySelect').value;
  const selectedSize = document.getElementById('sizeSelect').value;
  openReport(selectedCategory, selectedSize);
});

function openReport(category, size) {
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

  const filePath = filePaths[category] ? filePaths[category][size] : null;
  if (filePath) {
    window.open(filePath, '_blank');
  } else {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>帳票が選択されていません。</p>';
  }
}
