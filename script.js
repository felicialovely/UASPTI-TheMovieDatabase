function store() {
    var name;
    var pw;
    localStorage.setItem('uname', 'user');
    localStorage.setItem('pw', 'uaspti');
    check();
}
store();

function check() {

    document.getElementById('formlogin').onsubmit = function(form){
        form.preventDefault();
        
        var storedName = localStorage.getItem('uname');
        var storedPw = localStorage.getItem('pw');

        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');

        if(userName.value == storedName && userPw.value == storedPw) {
            location.href = "data.html";
        }
        else {
            alert('No User exist / Wrong Combination of User & Password');
        }
    }
}