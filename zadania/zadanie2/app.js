import { addUser, removeUser, findUser} from "./userManager.js";

const users = [];

addUser(users, {id:1, name: 'Jan'});
addUser(users, {id:2, name: 'Paweł'});
addUser(users, {id:3, name: 'Piotr'});

removeUser(users , 2);
findUser(users, 3);