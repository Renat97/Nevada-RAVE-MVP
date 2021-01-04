import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 400,
    minWidth: 400,
    '& .MuiTableCell-root': {
      width: '5px'
    },
    tableCell: {
      paddingRight: 0,
      paddingLeft: 0
    },
  },
  pagination: {
    display:'flex',
    justifyContent: 'center',
    width: "100%",
    alignItems: 'left',
    padding:'0px',
  }
}));

function createData(date, checkInTime, checkOutTime, hours) {
  return { date, checkInTime, checkOutTime, hours};
}

const rows = [
  createData('1/20/2020', '12:30pm', '4:00pm', '3:30'),
  createData('1/17/2020', '2:30pm', '9:00pm', '6:30'),
  createData('1/21/2020', '3:30pm', '7:00pm', '3:30'),
  createData('1/24/2020', '5:00pm', '8:00pm', '3:00'),
  createData('1/28/2020', '2:00pm', '6:00pm', '4:00'),
  createData('1/29/2020', '2:00pm', '6:00pm', '4:00'),
];

export default function DenseTable() {
  const classes = useStyles();

  const pages = [5, 10,];

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(pages[page])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }
  const handleChangeRowsPerPage =(event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const TblPagination = () => (
  <Grid item container xs={12}>
  <TablePagination classes = {{root: classes.pagination}} component="div" page={page} rowsPerPageOptions={pages} count={rows.length} rowsPerPage={rowsPerPage} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} />
  </Grid>
  )

  const recordsAfterPagingAndSorting = () => {
    return rows.slice(page*rowsPerPage, (page + 1) * rowsPerPage);
  }

  return (
    <Fragment>
    <TableContainer component={Paper}>
      <Grid container>
      <Table className={classes.table} size="small" aria-label="a dense table" align="center">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Date</TableCell>
            <TableCell className={classes.tableCell} align="left">Check in time</TableCell>
            <TableCell className={classes.tableCell} align="left">Check Out time</TableCell>
            <TableCell className={classes.tableCell} align="left">Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recordsAfterPagingAndSorting().map((row) => (
            <TableRow key={row.date}>
              <TableCell className={classes.tableCell} component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">{row.checkInTime}</TableCell>
              <TableCell className={classes.tableCell} align="left">{row.checkOutTime}</TableCell>
              <TableCell className={classes.tableCell} align="left">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TblPagination>
    </TblPagination>
      </Grid>
    </TableContainer>
    </Fragment>
  );
}