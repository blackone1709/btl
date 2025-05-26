document.getElementById('loginBtn').addEventListener('click', async function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const response = await fetch('http://localhost:5000/api/doctor/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // QUAN TRỌNG: gửi cookie/session đến backend
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const result = await response.json(); // Chuyển phản hồi thành object

        if (result.success) {
            window.location.href = 'dk.html'; // Chuyển trang nếu đăng nhập thành công
        } else {
            document.getElementById('loginMessage').textContent = result.message;
        }

    } catch (error) {
        document.getElementById('loginMessage').textContent = 'Lỗi kết nối đến server';
        console.error('Lỗi:', error);
    }
});
