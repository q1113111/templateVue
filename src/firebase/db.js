import firebase from 'firebase/app'
import 'firebase/firestore'

// 官網 設定cdn查詢
const firebaseConfig = {
  apiKey: 'AIzaSyCakGGSGwVhq-h7yMmVCXU8zPhVYmRHLWc',
  authDomain: 'myfirebase-99e32.firebaseapp.com',
  projectId: 'myfirebase-99e32',
  storageBucket: 'myfirebase-99e32.appspot.com',
  messagingSenderId: '675844197517',
  appId: '1:675844197517:web:094492763ed1cd25bca6c4',
  measurementId: 'G-CV9HVCJ2XY'
}

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
