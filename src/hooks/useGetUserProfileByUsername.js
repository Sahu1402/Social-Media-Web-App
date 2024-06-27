import React, { useEffect } from 'react'
import { useState } from 'react'
import useShowToast from './useShowToast'
import { query } from 'firebase/database'
import { Firestore, collection, getDocs, where } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import useUserProfileStore from '../store/userProfileStore'

const useGetUserProfileByUsername = (username) => {
    const [isLoading,setIsLoading] = useState(true)
    const showToast = useShowToast()
    const {userProfile, setUserProfile} = useUserProfileStore()
    // Above is same as useUserProfile(state => state.setUserProfile)

    useEffect(() => {
        const getUserProfile = async() => {
            setIsLoading(true)
            try{
                const q = query(collection(firestore,"users"),where("username","==",username))
                const querySnapShot = await getDocs(q)

                if(querySnapShot.empty) return setUserProfile(null);
                let userDoc;
                querySnapShot.forEach((doc) => {
                    userDoc = doc.data()
                })

                setUserProfile(userDoc)
                console.log(userDoc)
            }catch(error){
                showToast('Error',error.message,'error')
            }finally{
                setIsLoading(false)
            }
        }
        getUserProfile()
    },[setUserProfile , username , showToast])

    return {isLoading , userProfile}
}

export default useGetUserProfileByUsername
