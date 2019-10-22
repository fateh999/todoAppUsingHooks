import * as firebase from 'firebase';
import firebaseConfig from '../Config/firebaseConfig';

class FirebaseHandler {
  init() {
    firebase.initializeApp(firebaseConfig);
  }

  getInstance() {
    return firebase;
  }
}

export default new FirebaseHandler();
