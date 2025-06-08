const BASE_URL = "http://localhost:3000/api"; // Ganti sesuai port backend kamu
import { getIdToken } from "firebase/auth";
import { auth } from "../firebaseConfig";

type UserType = {
  uid: string;
  fullName: string;
  email: string;
};

export async function fetchUserApi() {
  const user = auth.currentUser;
  const token = user && (await getIdToken(user));

  const res = await fetch(`${BASE_URL}/fetch-user-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}

export async function createUserApi(user: UserType) {
  const res = await fetch(`${BASE_URL}/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  const data = await res.json();
  return data;
}
