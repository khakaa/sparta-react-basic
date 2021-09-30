// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJcsg4H6QAMo-rG8QmugJrgdVUbtmfwso",
  authDomain: "sparta-react-1b2c8.firebaseapp.com",
  projectId: "sparta-react-1b2c8",
  storageBucket: "sparta-react-1b2c8.appspot.com",
  messagingSenderId: "326887673806",
  appId: "1:326887673806:web:3131d4105eecb8349e659f",
  measurementId: "G-HP15BW0JEZ",
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase의 firesotre 인스턴스를 변수에 저장
// 필요한 곳에서 사용할 수 있도록 내보내기
export const db = getFirestore();
