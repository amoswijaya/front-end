"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, success } from "@/store/userSlice";
import { fetchUserApi } from "@/apis/userApi"; // pastikan fungsi ini benar

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state: any) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(startLoading());

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userData = await fetchUserApi();

      dispatch(success(userData));

      router.push("/");
    } catch (err: any) {
      dispatch(error(err.message));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        {loading ? "Bentar..." : "Login"}
      </Button>
    </Box>
  );
}
