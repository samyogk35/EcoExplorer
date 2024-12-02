import { db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const saveItinerary = async (userId, itineraryData) => {
  //structure the data for saving
  try {
    const docRef = await addDoc(collection(db, "itineraries"), {
      userId,
      ...itineraryData,
      createdAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving itinerary:", error);
    throw error;
  }
};

export const getUserItineraries = async (userId) => {
  try {
    const q = query(
      collection(db, "itineraries"),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    throw error;
  }
};
