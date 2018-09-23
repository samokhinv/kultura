import React from 'react'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import * as firebase from 'firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import 'firebase/firestore' // <- needed if using firestore

var firebaseConfig = {
	apiKey: "AIzaSyC5LSdeuYm7hmfAgPZw-eW1Ei_9TjGt7s4",
	authDomain: "cfapp-b16dd.firebaseapp.com",
	databaseURL: "https://cfapp-b16dd.firebaseio.com",
	projectId: "cfapp-b16dd",
	storageBucket: "cfapp-b16dd.appspot.com",
	messagingSenderId: "1071365131172"
};

// react-redux-firebase config
const rrfConfig = {
  // userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)


export default store;