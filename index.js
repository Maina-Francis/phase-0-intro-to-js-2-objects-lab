const employee = {
  name: "Francis",
  streetAddress: "Mirema drive, Kanairo",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");

console.log(employee);
console.log(newEmployee.name);
