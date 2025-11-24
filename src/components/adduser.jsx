import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography
} from "@mui/material";

export default function Adduser() {
  const [adduser, setAdduser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", adduser)
      .then(() => {
        alert("User added successfully");
        setAdduser({ name: "", email: "" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 5
      }}
    >
      <Card sx={{ width: 400, padding: 2, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Add User
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={adduser.name}
              onChange={(e) =>
                setAdduser({ ...adduser, name: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={adduser.email}
              onChange={(e) =>
                setAdduser({ ...adduser, email: e.target.value })
              }
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
