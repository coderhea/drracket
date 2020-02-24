function getUser(){// 로딩 시 사용자가 가져오는 함수
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if (xhr.status === 200){
            var users = JSON.parse(xhr.responseText);
            var list= document.getElementById('list');
            list.innerHTML='';
            Object.keys(users).map(function (key){
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.textContent = users[key];
                var edit= document.createElement('button');
                edit.textContent="Edit";
                edit.addEventListener('click', function(){
                    var name = prompt('Change to which name');
                    if (!name){
                        return alert('please give me a name');
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function(){
                        if (xhr.status === 200){
                            console.log(xhr.responseText);
                            getUser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PUT', '/users/' + key);
                    xhr.setRequestHeader('Content-type', 'application/json');
                    xhr.send(JSON.stringify({name : name}));
                });
                var remove = document.createElement('button');
                remove.textContent="Delete";
                remove.addEventListener('click', function(){
                    var xhr = new XMLHttpRequest();
                    xhr.onload= function(){
                        if (xhr.status === 200){
                            console.log(xhr.responseText);
                            getUser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/users/'+ key);
                    xhr.send();
                });
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
} 
window.onload = getUser; // 로딩 시 getUser 호출
document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault();
    var name = e.target.username.value;
    if (!name){
        return alert('please submit name');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if (xhr.status === 201){
            console.log(xhr.responseText);
            getUser();
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ name : name }));
    e.target.username.value='';
});
