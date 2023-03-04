"use strict";

main();

async function main() {
    const users = await getUsers(1);
    console.log(users.data);
    let content = "";
    for (let i = 0; i < users.data.length; i++) {
        const user = users.data[i];
        content = content + `
            <div>
            Hello!
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                <p>${user.first_name} ${user.last_name}</p>
            </div>
        `;
    }
    document.getElementById('app').innerHTML = content;
}

async function getUsers(page) {
    const response = await fetch(`https://regres.in/api/users?page=${page}`)
    return response.json();
}