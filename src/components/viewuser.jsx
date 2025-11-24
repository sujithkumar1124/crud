import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

export function ViewUser() {
  const [viewuser, setViewUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setViewUser(res.data))
      .catch((error) => console.log(error));
  }, []); // FIXED infinite loop

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setViewUser(viewuser.filter((item) => item.id !== id));
    });
  };

  return (
  <Box sx={{ padding: 4, backgroundColor: "#E8F5E9", minHeight: "100vh" }}>


      {/* Top Heading + Add Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Users List
        </Typography>

        <Button
          variant="contained"
          sx={{ paddingX: 3, paddingY: 1 }}
          onClick={() => navigate("/adduser")}
        >
          Add User
        </Button>
      </Box>
      

      {/* Table Card */}
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1976d2" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {viewuser.map((element) => (
                  <TableRow key={element.id} hover>
                    <TableCell>{element.id}</TableCell>
                    <TableCell>{element.name}</TableCell>
                    <TableCell>{element.email}</TableCell>

                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: 1 }}
                        onClick={() => navigate(`/update/${element.id}`)}
                      >
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(element.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      
    </Box>
  );
}
