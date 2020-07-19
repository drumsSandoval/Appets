import app from 'firebase/app';
import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!app.apps.length) app.initializeApp(firebaseConfig);
    // this.auth = app.auth();
  }
}

const firebase = new Firebase();
export default firebase;
