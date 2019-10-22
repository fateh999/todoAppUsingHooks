import {AsyncStorage} from 'react-native';

class DataStore {
  async setItem(key, value) {
    return await AsyncStorage.setItem(key, value);
  }

  async getItem(key) {
    return await AsyncStorage.getItem(key);
  }

  async removeItem(key) {
    return await AsyncStorage.removeItem(key);
  }

  async clear() {
    return await AsyncStorage.clear();
  }
}

export default new DataStore();
