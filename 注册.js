var uname = document.getElementById('username');
var uemail = document.getElementById('emailnumber');
var upwd = document.getElementById('password');
var u_pwd = document.getElementById('u_password');
var message = document.querySelectorAll('.message');
var error1 = false, error2 = false, error3 = false, error4 = false;
var sub = document.querySelector('.submit');
var check = document.getElementById('check');
var flag = 0;
uname.onblur = function () {
    if (this.value.length < 6 || this.value.length > 16) {
        message[0].className = 'message wrong'
        message[0].innerHTML = '输入不符合要求';
        error1 = false;
    }
    else {
        message[0].className = 'message correct'
        message[0].innerHTML = '您输入正确';
        error1 = true;
    }
}
uemail.onblur = function () {
    var reg = /^[A-Za-z0-9_.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    isok = reg.test(this.value);
    if (this.value == '' || !isok) {
        message[1].className = 'message wrong'
        message[1].innerHTML = '邮箱不符合要求';
        error2 = false;

    }
    else {
        message[1].className = 'message correct'
        message[1].innerHTML = '您输入正确';
        error2 = true;

    }
}
upwd.onblur = function () {
    if (this.value.length < 5 || this.value.length > 18) {
        message[2].className = 'message wrong'
        message[2].innerHTML = '输入不符合要求';
        error3 = false;

    }
    else {
        message[2].className = 'message correct'
        message[2].innerHTML = '您输入正确';
        error3 = true;

    }
}
u_pwd.onblur = function () {
    if (this.value !== upwd.value) {
        message[3].className = 'message wrong'
        message[3].innerHTML = '输入不符合要求';
        error4 = false;

    }
    else {
        message[3].className = 'message correct'
        message[3].innerHTML = '您输入正确';
        error4 = true;

    }
}
check.onclick = function () {
    if (flag == 0) {
        sub.removeAttribute('disabled');
        sub.style.backgroundColor = '#000';
        flag = 1;
    }
    else {
        sub.disabled = 'true';
        sub.style.backgroundColor = '#999';
        flag = 0;

    }
}
sub.onclick = function () {
    // alert('这里');
    if (error1 && error2 && error3 && error4) {
        // alert(uemail.value);
        reqwest({
            url: 'http://39.106.168.39:82/api/auth/register'
            , type: 'json'
            , method: 'post'
            , data: JSON.stringify({
                username: uname.value,
                password: upwd.value,
                email: uemail.value
            })
            , contentType: 'application/json'
            , error: function (err) {
                alert("111")
            }
            , success: function (resp) {
                if (resp.Header.header.code != 200) {
                    window.alert(resp.Header.header.msg)
                    window.alert("注册失败！");

                }
                else {
                    window.alert("注册成功！");
                    // window.location.href = '登录.html';
                    window.alert("ok");
                }

                // qwery('#content').html(resp.content)
            }
        })
        window.alert("注册成功！");
        // window.location.href = '登录.html';
        // alert("ok")
    }
    else {

        window.alert("注册失败！");
    }
}
