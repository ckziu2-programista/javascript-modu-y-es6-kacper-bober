export function addUser(users, user) {
    users.push(user); 
}
export function removeUser(users, id) {
const index = users.findIndex(user => user.id === id);
if (index !== -1) {
    users.splice(index, 1);
}
}

export function findUser(users, id) {
return users.find(user => user.id === id);
}
