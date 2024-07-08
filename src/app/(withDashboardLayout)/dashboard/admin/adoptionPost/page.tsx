import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AdoptionPost() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography fontSize={20} fontWeight={700}>
                Name
              </Typography>
            </TableCell>
            <TableCell align="left">
            <Typography fontSize={20} fontWeight={700}>
                Pet Order details
              </Typography>
              </TableCell>
            <TableCell align="left">
            <Typography fontSize={20} fontWeight={700}>
                Status
              </Typography>
              </TableCell>
            <TableCell align="right">
            <Typography fontSize={20} fontWeight={700}>
                Action
              </Typography>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Md Mohiuddin</TableCell>
              <TableCell align="left">
                Previous owner of a Labrador Retriever
              </TableCell>
              <TableCell align="left">
                <Typography>
                  <span
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "lightgray",
                      padding: "10px",
                      fontSize: "12px",
                      borderRadius: "20px",
                    }}
                  >
                    Accepted
                  </span>
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  sx={{
                    width: "50px",
                    height: "30px",
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                  color="primary"
                >
                  Accept
                </Button>
                <Button
                  size="small"
                  sx={{
                    width: "50px",
                    height: "30px",
                    fontSize: "10px",
                  }}
                  color="secondary"
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
