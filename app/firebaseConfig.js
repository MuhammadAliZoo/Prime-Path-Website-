import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIMLQiVR5wadsSr_im6EcbDXafZh0YoPA",
  authDomain: "prime-path-export.firebaseapp.com",
  projectId: "prime-path-export",
  storageBucket: "prime-path-export.firebasestorage.app",
  messagingSenderId: "388004734917",
  appId: "1:388004734917:web:004f5bb9128aebd281cdac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 