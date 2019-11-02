import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../Config/firebaseConfig';

class FirebaseHandler {
  init() {
    firebase.initializeApp(firebaseConfig);
  }

  getInstance() {
    return firebase;
  }

  getDBInstance(path) {
    return firebase.firestore().collection(path);
  }
}

export default new FirebaseHandler();
