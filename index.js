var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipe = new Object({key:value})
  newRecipe;
  recipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object.key = value;
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  Object.assign({}, object);
  delete object.key;
  return Object.assign({}, Object)
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
<<<<<<< HEAD
  return object;
=======
}

function destructivelyDeleteFromObjectByKey(object, key){
  
>>>>>>> eeeebdad3f7b8a1ca222234c1d9700d4a3429e78
}