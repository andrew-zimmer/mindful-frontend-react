import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

const columns = [
    { id: 'title', label: 'Title', minWidth: 50 },
    { id: 'mood', label: 'Mood', minWidth: 50, align: 'center' },
    {
        id: 'created_at',
        label: 'Date',
        minWidth: 50,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    ,
    {
        id: 'comment',
        label: 'Comment',
        minWidth: 250,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
];





const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable({ returnMoodsArray }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const rows = returnMoodsArray()
    console.log(rows)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        if (column.id === 'created_at') {
                                            const d = new Date(row.created_at);
                                            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                                            const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {date}/{mo}/{ye}
                                                </TableCell>)
                                        } else if (column.id === 'comment') {
                                            const commentArray = row.comment.split('')
                                            const addButton = () => {
                                                return <Button>Read More</Button>
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align} style={{ verticalAlign: 'sub' }}>
                                                    <p>{commentArray.length >= 70 ? `${commentArray.slice(0, 70).join('')}...` : `${commentArray.join('')}`}
                                                        <Button variant='outlined' style={{ float: 'right' }}>Read More</Button>
                                                    </p>
                                                </TableCell>
                                            )
                                        } else {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        }
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
