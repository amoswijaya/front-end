// components/AuthListener.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { success, logout } from "@/store/userSlice";
import { fetchUserApi } from "@/apis/userApi";

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        const userData = await fetchUserApi();
        console.log(userData);
        dispatch(success(userData));
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        dispatch(logout());
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe(); // cleanup
  }, [dispatch]);

  return null;
}
