import { setDoc, merge } from 'firebase/firestore'
import { useState } from 'react'
import { doc, getFirestore } from 'firebase/firestore'

export default function UseUser() {
    const db = getFirestore()
    const [userId, setUserId] = useState(null)
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [authStatus, setAuthStatus] = useState(false)
    let userReference = {}

    const setUserReference = (userId, userData = {}, merge = true) => {
        const userRef = doc(db, 'users', userId);
        setDoc(userRef, {userId, ...userData}, {merge})
        setUserName(userData.displayName)
    }
    
    const toggleAuth = () => {
setAuthStatus(current => !current)
 }




  return (
   {
    userId, setUserId, email, setEmail, userName, toggleAuth, setUserName, setUserReference, authStatus, setAuthStatus
   }
  )
}
