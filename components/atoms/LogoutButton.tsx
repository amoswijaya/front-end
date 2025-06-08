"use client";

import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useDispatch } from "react-redux";
import { logout } from "@/store/userSlice";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // logout dari Firebase
      dispatch(logout()); // reset redux state
      router.push("/login"); // redirect ke login page
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <Button variant="outlined" color="error" onClick={handleLogout}>
      Logout
    </Button>
  );
}
