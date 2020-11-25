function fnLogin() {
    var oUname = document.getElementById("username");
    var oUpass = document.getElementById("upassword");
    var oError = document.getElementById("error_box");
    var isError = true;
    oError.innerHTML = "<br>"
    //uname
    if (oUname.value.length > 20 || oUname.value.length < 6) {
        oError.innerHTML = "请输入用户名：6-20位";
        isError = false;
        return;
    } else if ((oUname.value.charCodeAt(0) >= 48 && (oUname.value.charCodeAt(0) <= 57))) {
        oError.innerHTML = "昵称首字母不能是数字.";
        return;
    } else for (var i = 0; i < oUname.value.length; i++) {
        if (oUname.value.charCodeAt(i) < 48 || (oUname.value.charCodeAt(i) > 57 && (oUname.value.charCodeAt(i) < 97) || (oUname.value.charCodeAt(i) > 122))) {
            oError.innerHTML = "此用户密码只能包含字母和数字";
            return;
        }
    }
    //upassword
    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
        oError.innerHTML = "用户名密码是6-20位";
        isError = false;
        return
    }
    window.alert("登录成功！")
}
fnLogin();