function findUserByUsername(usersArray, username) {
	return usersArray.find((obj) => obj.username == username)
}

function removeUser(usersArray, username) {
	let userFound = usersArray.find((obj) => obj.username == username);
	let index = usersArray.findIndex((obj) => obj.username == username);
	if (!(index == -1)) {
		usersArray.splice(index, 1);
	}
	return userFound;
}