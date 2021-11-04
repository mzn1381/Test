// debugger

function SetCookie(name, value, date) {
    var m = new Date();
    m.setTime(m.getTime() + (date * 24 * 60 * 60 * 1000));
    var TC = "expires=" + m.toGMTString();
    document.cookie = name.toString() + "=" + value.toString() + ";" + TC + ";path=/";
}

function GetCookie(name) {
    var cook = decodeURIComponent(document.cookie);
    var cookies = cook.split(';');
    for (let index = 0; index < cookies.length; index++) {
        var v = cookies[index];
        while (v.charAt(0) == ' ') {
            v = v.substring(1);
        }
        if (v.indexOf(name) == 0) {
            return v.substring(name.length, v.length)
        } else {
            return "";
        }
    }
}

function CheckCookie() {
    var cookiename = prompt('please enter Your Cookie Name');
    var check = GetCookie(cookiename);
    if (check != "") {
        alert("Welcome To My WebSite" + check);
    } else {
        // alert('this Not Found CookieName');
        var name = prompt('please enter cookiename for create');
        console.log(name);
        SetCookie(name.toString(), "fazely", 3);
        // alert('your cookie created');
    }
}