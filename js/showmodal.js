function showModal() {
    // 入力内容を取得
    var lastName = document.getElementById('last-name').value;
    var firstName = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    // 入力チェック
    if (!lastName || !firstName || !email) {
        alert('全ての必須項目を入力してください。');
        return;
    }

    // モーダルに表示
    document.getElementById('modalLastName').textContent = '姓: ' + lastName;
    document.getElementById('modalFirstName').textContent = '名: ' + firstName;
    document.getElementById('modalEmail').textContent = 'メールアドレス: ' + email;
    document.getElementById('modalComments').textContent = 'お問い合わせ内容: ' + comments;

    // モーダルを表示
    document.getElementById('confirmationModal').style.display = "block";
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = "none";
}

function submitForm() {
    document.getElementById('contactForm').submit();
}

// モーダルの外側をクリックしたときにモーダルを閉じる
window.onclick = function(event) {
    if (event.target == document.getElementById('confirmationModal')) {
        closeModal();
    }
}
