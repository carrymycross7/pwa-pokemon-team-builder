import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    addDoc,
    doc,
    getFirestore,
    collection,
    deleteDoc,
    getDocs,
    setDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    
    apiKey: "AIzaSyAL7TrDzJFd7a3YCyv2JV2XOMn9VbehZ2g",
    
    authDomain: "pokemon-team-builder-ba2df.firebaseapp.com",
    
    projectId: "pokemon-team-builder-ba2df",
    
    storageBucket: "pokemon-team-builder-ba2df.appspot.com",
    
    messagingSenderId: "832965588470",
    
    appId: "1:832965588470:web:518352aa5d6f75b66e83d7",
    
    measurementId: "G-Z1T84J6TK1",
    // type: "service_account",
    // project_id: "pokemon-team-builder-ba2df",
    // private_key_id: "ab3d79918554a4bc8e897ce337d0f04e0c009921",
    // private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMQLH9wobqCYDZ\ntEfQRiBELtrLAZKrHxAnpFljxbOF15yRAiPb4/9+jiyUfxTJoE7FOnrwI3eZ9h2H\nm6PqT8JuQARdOX4ZYUojbId6eZApSAZM121CGVXDC2TufhTfMe5sd7SiBo0sqvwV\nVT57uIvDnL7Mj6xVvipLwiGNGdrDIw9Wf/7j4zuou1Kc6BTYhpOB8MnApGLLm8vr\n42qzGUGZ6lWwfxypTcIdr3T1XupYWutj4aDIwtIH9yMhmLAxsg8p2od5YHxftE7k\npX9o/F7V5YCGw+5U31y8CFaXL6RnrT7jjgFvCDNjzdBEpF/7uEAvPDks8d0wXy1b\nCBWzdXxPAgMBAAECggEABRjMUs5zhT1EU72p5HEsRYzTvTdHnBxP/soJyIHugR0s\nwSViQ4gbL/V4CuPG7YBoKfWQhmZpGgMjLm8AgHT0Q8i8evEggfomVTz/QMnnAAJI\n8d2079/Pv7bG8czofGxvEOTj/3uIxo01QNqZZILukuEA88GcbAZZakw8bCHw+lDH\nDD+2eiPOw91i1JJ83eV3k/MpGj96e7ZJMfN2ZJqs4ei6j4yrrB5UkTxNgDSIRsR6\nL7bkoyr5qEU52+vm7+icUIb7eu6cPqwJh7czx+kKLZy0grChOVGujsv+4lLBtZS2\neaAMEqwGsl+bHoMi9HBLfHgkORQm/tSQ4Kee/H2ZvQKBgQC+Bi+xPmxZmu8HiZC1\nRRoWsdsg7aRiYFw41HakcaegsUMfui9gEzv5KJF4mefcT7VgZharZFf5YzhMfefy\n402HJ+GVuY1ebczrGcLKha84NJmvDd0ICb+PpGHnx3vpIQet8L2qw0Vl0aEY46Cn\nKSuG4HTUL1btKqv9hKI3HqPawwKBgQC88rNWeNrlBB7HIT0/cfegLVm/aSX7b/1/\n+XXGVdWhn4p3DKxRcnhJyI+GotNSuDwRmqJxcIwcrYwYGsjA5gMjr4N1csELRxuP\n2zHWy/ATwPBwovXVS41JgADOlQ1T7UZBV4P+BfQkUQy3+mXQD5BXT951gf2SIhDu\nejbk8KiHhQKBgDfaW6ROQ8ympIFjptwQ/pUTG+R21S1xQ0oU8PZuzaWG1ML7l7c2\nkBcxHGkFW8g+yYIXH6yq5szPpBmfnFChDQWf7Ed07Z+GyIeF3+JlHtZ3Z4Czo3cc\nXmjbGUfmM36XjclLjIQntzsxPZeyOGNJz5hqWwyPCY7WTw1KMd/fqqu/AoGAToyj\nC4bQkTamSOhDmxWY+SkBT3a6CI5lF4ewc5SJbFhz6swE8xMgeKP9Lt6P9aqLplHf\nyEMerGllfTvdS3wTwAkeIHxlTnfwOFzKml5L3xptmpXUlyiCgxTIwRjr4oEYnN9y\nCu+UsGhVXkKlgtqFiha1B6rTrKWm3k1GduSpWzUCgYEAqV2ieZp1X8XNGwVzTrV4\n0SyFYKhG4VsmHcxdxUmXUVgeQyZ7FbEcijxLyOtIc02df046yaUsi7HN0iuYneGn\nQrbwf6gmzN7EeOxVOWnqWXAU/eg5/UFaEgM4VE+WltkMBCEVuU+gaIzJZM1bA7eg\nAPMI+UvHqmPqQe3tLT7NARs=\n-----END PRIVATE KEY-----\n",
    // client_email: "firebase-adminsdk-mwdqt@pokemon-team-builder-ba2df.iam.gserviceaccount.com",
    // client_id: "105652735399690970000",
    // auth_uri: "https://accounts.google.com/o/oauth2/auth",
    // token_uri: "https://oauth2.googleapis.com/token",
    // auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    // client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mwdqt%40pokemon-team-builder-ba2df.iam.gserviceaccount.com"
    //
};




// Initialize Firebase
const application = initializeApp(firebaseConfig);
const db = getFirestore(application);

console.dir(db); // debug - remove


async function getTypes(db) {
    const typesCol = collection(db, 'types');
    const typeSnapshot = await getDocs(typesCol);
    const typesList = typeSnapshot.docs.map((doc) => doc.data());
    
    return typesList;
}

const typesUpdate = document.querySelector(".add");
typesUpdate.addEventListener("click", async (event) => {
    let params = {
        type: '',
        resistances: '',
        strengths: '',
        weaknesses: '',
        
    }
    event.preventDefault();
    try {
        params.type = document.getElementById('nt_name').value;
        params.resistances = document.getElementById('nt_res').value.split(',');
        params.strengths = document.getElementById('nt_str').value.split(',');
        params.weaknesses = document.getElementById('nt_weak').value.split(',');
    
        await setDoc(doc(db, "types", params.type), params).catch((error) => console.log(error));
        params.name = "";
        params.resistances = "";
        params.strengths = "";
        params.weaknesses = "";
        
    }catch (e) {
        console.dir(e);
    }
    
});

// let list = await getTypes(db);
//
// console.dir(list); // debug - remove

const unsub = onSnapshot(collection(db, "types"), (doc) => {
    //   console.log(doc.docChanges());
    doc.docChanges().forEach(async (change) => {
        if(change.type == 'added') {
            assignTypes(change.doc.data());
        }
    });
});


const typesDelete = document.querySelector(".remove");
typesDelete.addEventListener("click", (event) => {
    const name = document.getElementById('rt_name');
    deleteDoc(doc(db, "types", name.value));
});


