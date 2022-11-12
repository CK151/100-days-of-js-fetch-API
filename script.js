const btn = document.querySelector(".btn")

btn.addEventListener("click", getUsers)



function getUsers(e) {
    e.preventDefault();

    fetch("users.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let output = "";

            data.forEach(function(user) {
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
        })
}