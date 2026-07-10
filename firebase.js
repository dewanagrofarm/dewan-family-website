
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpAi3OjOg_obBpy5KC4tHuhG7xaPsR5xk",
  authDomain: "dewan-family-heritage.firebaseapp.com",
  databaseURL: "https://dewan-family-heritage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dewan-family-heritage",
  storageBucket: "dewan-family-heritage.firebasestorage.app",
  messagingSenderId: "39428944282",
  appId: "1:39428944282:web:02382ebfafe47eba974a23",
  measurementId: "G-0J1LZQ7JLH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
