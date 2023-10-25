
emailjs.init('m_cJTc3CBeWJutcZS');
document.addEventListener('DOMContentLoaded', function () {
            var sendCommentButton = document.getElementById('send-comment-button');
            var floatingCommentButton = document.getElementById('floating-comment-button');
            var closeButton = document.getElementById('close-button');
            var commentContainer = document.querySelector('.comment-container');

            floatingCommentButton.addEventListener('click', function () {
                commentContainer.classList.add('show');
            });

            closeButton.addEventListener('click', function () {
                commentContainer.classList.remove('show');
            });

            sendCommentButton.addEventListener('click', function () {
                var name = document.getElementById('name-input').value;
                var email = document.getElementById('email-input').value;
                var comment = document.getElementById('comment-input').value;

                // Kirim komentar menggunakan email.js (tambahkan logika pengiriman email di sini)
                emailjs.send("service_k5d9xd7", "template_i7ittgf", {
                    name: name,
                    email: email,
                    comment: comment
                }).then(
                    function (response) {
                        console.log("Komentar berhasil dikirim:", response);
                        alert("Komentar Anda telah berhasil dikirim!");
                        // Reset nilai input setelah mengirim komentar
                        document.getElementById('name-input').value = '';
                        document.getElementById('email-input').value = '';
                        document.getElementById('comment-input').value = '';
                        // Sembunyikan form komentar setelah mengirim
                        commentContainer.classList.remove('show');
                    },
                    function (error) {
                        console.log("Error:", error);
                        alert("Maaf, terjadi kesalahan saat mengirim komentar.");
                    }
                );
            });
        });
