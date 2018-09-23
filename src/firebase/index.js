import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';


var config = {
	apiKey: "AIzaSyC5LSdeuYm7hmfAgPZw-eW1Ei_9TjGt7s4",
	authDomain: "cfapp-b16dd.firebaseapp.com",
	databaseURL: "https://cfapp-b16dd.firebaseio.com",
	projectId: "cfapp-b16dd",
	storageBucket: "cfapp-b16dd.appspot.com",
	messagingSenderId: "1071365131172"
};

firebase.initializeApp(config);

export default firebase;