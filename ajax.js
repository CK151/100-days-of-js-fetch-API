//load all users


const btn = document.querySelector(".btn");

btn.addEventListener("click", getUsers);


//creating the function getUsers


function getUsers(e) {
    e.preventDefault();

    //instatiating the xlm
    const http = new XMLHttpRequest();

    http.open("Get", "users.json", true);

    http.onload = function() {
        if (this.status == 200){

            //accessing the data
            const users = JSON.parse(this.  responseText);

            let output = "";

            users.forEach(function(user) {
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>age: ${user.age}</li>
                        <li>email: ${user.id}</li>
                    </ul>
                
                `;
            })

            document.getElementById("users").innerHTML= output;
        }
    }

    http.send();
}