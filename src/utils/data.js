const fs = require('fs/promises');

const getData = async (path) => {
  const file = await fs.readFile(path);
  const data = JSON.parse(file.toString());
  return data;
};

const saveNewObject = async (path, newObject) => {
  const oldData = await getData(path);

  const nextID = oldData.length + 1;

  const newObjectWithId = {
    id: nextID,
    ...newObject,
  };

  oldData.push(newObjectWithId);

  await fs.writeFile(path, JSON.stringify(oldData));

  return newObjectWithId;
};

const getById = async (path, id) => {
  const data = await getData(path);

  const object = data.find((obj) => obj.id === Number(id));

  return object;
};

const updateObject = async (path, id, newObject) => {
  const data = await getData(path);

  const filteredData = data.filter((obj) => obj.id !== Number(id));

  await fs.writeFile(path, JSON.stringify(filteredData));

  const newObjectWithId = await saveNewObject(path, newObject);
  return newObjectWithId;
};

module.exports = {
  saveNewObject,
  getData,
  getById,
  updateObject,
};
