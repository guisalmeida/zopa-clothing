// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1GBIcdvdfUg3U3JSHZZLsZXbY3JRdJCg",
    authDomain: "zopa-clothing-db.firebaseapp.com",
    projectId: "zopa-clothing-db",
    storageBucket: "zopa-clothing-db.appspot.com",
    messagingSenderId: "585550279365",
    appId: "1:585550279365:web:ac4b76dce1995854ff36ac"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const db = getFirestore()

//@ts-ignore
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    //@ts-ignore
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object: { code_color: string; }) => {
        const docRef = doc(collectionRef, object.code_color.toLowerCase())
        batch.set(docRef, object)
    });

    await batch.commit()
    console.log('Done');
}

export const getCategoriesAndDocuments = async () => {
    //@ts-ignore
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        //@ts-ignore
        const { title, items } = docSnapshot.data()
        //@ts-ignore
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}

export const getProductsCollection = async () => {
    //@ts-ignore
    const collectionRef = collection(db, 'products')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    const products = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const product = docSnapshot.data()
        //@ts-ignore
        acc.push(product)
        return acc
    }, [])

    return products
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const createUserDocumentFromAuth = async (userAuth: any, additionalInfo = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error: any) {
            console.log('Error creating the user!', error.message);
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListener = (callback: any) => onAuthStateChanged(auth, callback)