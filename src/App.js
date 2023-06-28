import { Button, Card, Modal } from "@mui/material";
import "./App.css";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [carColor, setCarColor] = useState("");
  const [carNum, setCarNum] = useState("");
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const openModalHandler = function () {
    setOpen(true);
  };
  const closeModal = function () {
    setOpen(false);
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    setOpen(false);
    setRows((pre) => [...pre, { carNum: carNum, carColor: carColor }]);
    setCarNum("");
    setCarColor("");
  };

  return (
    <div className="App">
      <h1 className="heading">Automated Parking Lot System</h1>
      <Button onClick={openModalHandler} variant="contained">
        Park a Car
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Card variant="outlined">
          <form className="form">
            <label htmlFor="carColor">Car Color</label>
            <br />
            <input
              id="carColor"
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
            />
            <br />

            <label htmlFor="carNum">Car No.</label>
            <br />

            <input
              id="carNum"
              value={carNum}
              onChange={(e) => setCarNum(e.target.value)}
            />
            <br />
            <br />

            <Button
              onClick={onSubmitHandler}
              variant="contained"
              type="success"
              className="formbtn"
            >
              Submit
            </Button>
            <Button
              onClick={closeModal}
              variant="contained"
              className="formbtn"
            >
              Close
            </Button>
          </form>
        </Card>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Car Number</TableCell>
              <TableCell align="right">Car Color</TableCell>
            </TableRow>
          </TableHead>
          {rows.length > 0 && (
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={Math.random()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{i + 1}</TableCell>
                  <TableCell align="right">{row?.carNum}</TableCell>
                  <TableCell align="right">{row?.carColor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
