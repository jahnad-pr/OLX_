import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db,storage } from './firebase'
import React from 'react'

// Firebase CRUD operations
// add prodect to sell
export const addProdect = async (prodect,imageURL,showSeccuss) => {
    const usersCollectionRef = collection(db, "Prodects");
    await addDoc(usersCollectionRef, {...prodect,imageURL,date:Date.now()})
    .then(res => showSeccuss(true) )
}
// READ: Fetch all data
export const getUsers = async () => {
  const usersCollectionRef = collection(db, "Prodects");
  const data = await getDocs(usersCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};




// Externals
// Upload image
export const uploadImage = async (file) => {
    if (!file) return;

    const response = await fetch(file);
    const finelResult = await response.blob();

    const storageRef = ref(storage, `images/prodect-on-${Date.now()}`); // Create a reference for the image
  
    try {
      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, finelResult);
      // Get the URL of the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };