import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@mui/material";

export function Update() {
  const [update, setUpdate] = useState({ name: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => setUpdate(res.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/users/${id}`, update)
      .then(() => {
        alert("Updated successfully!");
        navigate("/");
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#E3F2FD" // Light blue background
      }}
    >
      <Card sx={{ width: 400, padding: 3, borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            marginBottom={3}
          >
            Update User
          </Typography>

          <form onSubmit={handleUpdate}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              value={update.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={update.email}
              onChange={(e) => setUpdate({ ...update, email: e.target.value })}
              sx={{ marginBottom: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ paddingY: 1.2 }}
            >
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
