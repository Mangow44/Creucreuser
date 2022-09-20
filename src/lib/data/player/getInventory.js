import { db } from '$lib/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const getInventory = async (uid) => {
	const docRef = doc(db, 'inventory', uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return {};
	}
}