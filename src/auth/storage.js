import AsyncStorage from "@react-native-async-storage/async-storage";

const tokenkey = "TOKEN_ID_DOC";
const userData = "USER_DATA";
const adData = "AD_DATA";

const storeField = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error storing the Field", error);
  }
};

const removeField = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing the Field", error);
  }
};

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(tokenkey, token);
  } catch (error) {
    console.log("Error storing the token", error);
  }
};

const getToken = async () => {
  try {
    const val = await AsyncStorage.getItem(tokenkey);
    return val ? val : null;
  } catch (error) {
    console.log("Error getting the token", error);
  }
};

const storeUserData = async (data) => {
  try {
    await AsyncStorage.setItem(userData, data);
  } catch (error) {
    console.log("Error storing the token", error);
  }
};

const getUserData = async () => {
  try {
    const val = await AsyncStorage.getItem(userData);
    return val ? val : null;
  } catch (error) {
    console.log("Error storing the token", error);
  }
};

const getField = async (key) => {
  console.log("key---", key);
  const val = await AsyncStorage.getItem(key);
  return val ? val : null;
};

const removeId = async () => {
  try {
    await AsyncStorage.removeItem(tokenkey);
    await AsyncStorage.removeItem(userData);
    await AsyncStorage.removeItem(adData);
  } catch (error) {
    console.log("Error at delete customerid", error);
  }
};

export default {
  storeField,
  getField,
  removeId,
  removeField,
  storeToken,
  getToken,
  storeUserData,
  getUserData,
};
