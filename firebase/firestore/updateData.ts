import app from "../config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function updateData(    collection: string,
    id: string,
    data: any
) { 
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await updateDoc(docRef, data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}