// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqLXB5H-9UGM7-Oj6vnd7vfF4d6jS5BYM",
  authDomain: "coba-e6c01.firebaseapp.com",
  databaseURL: "https://coba-e6c01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coba-e6c01",
  storageBucket: "coba-e6c01.appspot.com",
  messagingSenderId: "742858094690",
  appId: "1:742858094690:web:d023c9332598049ecb793b",
  measurementId: "G-Q4NQQF30SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication and database instances
const auth = getAuth(app);
const database = getDatabase(app);

// Email and password for authentication
const email = "arifhida1647@gmail.com";
const password = "123456";

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed in
    
    // Initial call to renderData
    renderData();

    // Refresh data every 5 seconds
    setInterval(renderData, 5000);
  })
  .catch((error) => {
    console.error("Error signing in:", error);
  });

// Function to update the color based on Firebase data
async function renderData() {
  const dataRef = ref(database, "/");

  try {
    const snapshot = await get(dataRef);
    const data = snapshot.val();

    if (data) {
      // Update elements with class "pir1"
      const pir1Elements = document.getElementsByClassName('pir1');
      for (const element of pir1Elements) {
        if (data.pir1 && data.pir1.motionStatus === 1) {
          element.classList.remove('bg-emerald-500');
          element.classList.add('bg-red-600');
        } else {
          element.classList.remove('bg-red-600');
          element.classList.add('bg-emerald-500');
        }
      }

      // Update elements with class "pir2"
      const pir2Elements = document.getElementsByClassName('pir2');
      for (const element of pir2Elements) {
        if (data.pir2 && data.pir2.motionStatus === 1) {
          element.classList.remove('bg-emerald-500');
          element.classList.add('bg-red-600');
        } else {
          element.classList.remove('bg-red-600');
          element.classList.add('bg-emerald-500');
        }
      }

      // Update elements with class "pir3"
      const pir3Elements = document.getElementsByClassName('pir3');
      for (const element of pir3Elements) {
        if (data.pir3 && data.pir3.motionStatus === 1) {
          element.classList.remove('bg-emerald-500');
          element.classList.add('bg-red-600');
        } else {
          element.classList.remove('bg-red-600');
          element.classList.add('bg-emerald-500');
        }
      }
    }
  } catch (error) {
    console.error("Error getting data from the database:", error);
  }
}
