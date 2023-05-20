import app from "../config";
import { getFirestore, collection, getDocs, orderBy, limit, query } from "firebase/firestore";

const db = getFirestore(app);

export default async function getAllCollection(collectionName: string) {
    let result = null;
    let error = null;

    try {
        // sort by createdAt desc
        const querySnapshot = query(collection(db, collectionName), orderBy("createdAt", "desc"), limit(10));
        const data = await getDocs(querySnapshot);
        
        result = data.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}