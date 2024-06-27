const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    if (!response.ok) {
      alert('Login failed');
      return;
    }
  
    const data = await response.json();
    if (data.token) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('chat').style.display = 'block';
      localStorage.setItem('token', data.token);
    } else {
      alert('Login failed');
    }
  };

