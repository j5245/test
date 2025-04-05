import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyADJ64AfamdM14iShA3Qtjp_0tta54tVSg",
  authDomain: "store-d011d.firebaseapp.com",
  projectId: "store-d011d",
  storageBucket: "store-d011d.firebasestorage.app",
  messagingSenderId: "582659179524",
  appId: "1:582659179524:web:723a950f8d71fdbd6ae151",
  measurementId: "G-LF23JXGSMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


window.fetchAnkletItems = async () => {
  const colRef = collection(db, "anklets"); 
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data()); 
};

window.fetchBraceletItems = async () => {
  const colRef = collection(db, "bracelets");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchChainItems = async () => {
  const colRef = collection(db, "chains");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};
window.fetchChildrenProductItems = async () => {
  const colRef = collection(db, "childrenProducts");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchCommitmentRingItems = async () => {
  const colRef = collection(db, "commitmentRings");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchEarringItems = async () => {
  const colRef = collection(db, "earrings");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchNecklaceItems = async () => {
  const colRef = collection(db, "necklaces");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchMenRingItems = async () => {
  const colRef = collection(db, "menRings");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchWomenRingItems = async () => {
  const colRef = collection(db, "womenRings");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchPendantItems = async () => {
  const colRef = collection(db, "pendants");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

window.fetchZMainItems = async () => {
  const colRef = collection(db, "zmain");
  const snapshot = await getDocs(colRef);
  
  return snapshot.docs.map(doc => doc.data());
};

export {analytics};