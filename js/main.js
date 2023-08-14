$(document).ready(() => {
    localStorage.clear();
    $('#btnLoginManual').click(() => {
        const userLogin = {
            // email: $('#txtLoginEmail').val(),
            // password: $('#txtLoginPassword').val()
            email: 'datlv@gmail.com',
            password: 'Datlv@12345'
        };
        $.ajax({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `
                        query {
                            login(email: "${userLogin.email}", password: "${userLogin.password}") {
                                accessToken
                                ownerId
                            }
                        }
                    `
            }),
            success: (res) => {
                console.log(res);
                if (res.data.login) {
                    const dataLogin = {
                        email: userLogin.email,
                        accessToken: res.data.login.accessToken,
                        ownerId: res.data.login.ownerId
                    };
                    localStorage.setItem('dataLogin', JSON.stringify(dataLogin));

                   

                    window.location.href = './html/home.html';
                } else {
                    alert('Login failed!');
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
    });
});