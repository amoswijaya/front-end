"use client";

import { useAppSelector } from "@/store/hooks";
import UpdateButton from "@/components/atoms/UpdateButton";
import LogoutButton from "@/components/atoms/LogoutButton";
import {
  Typography,
  Box,
  Paper,
  CircularProgress,
  Alert,
  Divider,
} from "@mui/material";
import ProtectedRoute from "@/components/organisms/ProtectedRoute";

export default function MainPage() {
  const { user, loading, error } = useAppSelector((state) => state.user);

  return (
    <ProtectedRoute>
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 6, px: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          User Profile
        </Typography>

        {loading && (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {user && (
          <Paper elevation={3} sx={{ p: 3, mt: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Welcome, {user.fullName}!
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1">
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1">
              <strong>UID:</strong> {user.uid}
            </Typography>
          </Paper>
        )}

        {/* {updateStatus === "success" && (
        <Alert severity="success" sx={{ mt: 2 }}>
          User data updated successfully!
        </Alert>
      )} */}

        <Box mt={4} display="flex" justifyContent="space-between">
          <UpdateButton />
          <LogoutButton />
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
