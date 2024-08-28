import fs from 'fs';

// Replace __dirname with import.meta.url to get the directory path in ES modules
const usersFilePath = '../../api/users.json';

async function addUser(newUser) {
  try {
    const data = await fs.promises.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    users.push(newUser);
    await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    console.log('User added successfully!');
  } catch (err) {
    console.error(err);
  }
}

async function deleteUser(userId) {
  try {
    const data = await fs.promises.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    const updatedUsers = users.filter(user => user.id !== userId);
    await fs.promises.writeFile(usersFilePath, JSON.stringify(updatedUsers, null, 2));
    console.log('User deleted successfully!');
  } catch (err) {
    console.error(err);
  }
}

async function modifyUser(modifiedUser) {
  try {
    const data = await fs.promises.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    const userIndex = users.findIndex(user => user.id === modifiedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = modifiedUser;
      await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
      console.log('User modified successfully!');
    } else {
      console.log('User not found!');
    }
  } catch (err) {
    console.error(err);
  }
}

export { addUser, deleteUser, modifyUser };
