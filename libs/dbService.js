import SQLite from 'react-native-sqlite-storage';

function init() {
  const db = SQLite.openDatabase({
    name: 'test.db',
    location: 'default',
  });
}
