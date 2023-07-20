const fs = require('fs/promises');

const getData = async (path) => {
  const file = await fs.readFile(path);
  const data = JSON.parse(file.toString());
  return data;
};

const saveNewObject = async (path, newObject) => {
  const oldData = await getData(path);
  oldData.push(newObject);

  await fs.writeFile(path, JSON.stringify(oldData));
};

module.exports = {
  saveNewObject,
  getData,
};
