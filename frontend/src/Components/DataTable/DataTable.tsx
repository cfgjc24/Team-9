import { useState } from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from "@mui/material";
import { Dashboard, DashboardCol } from "../../Models/Dashboard";

const columns: readonly DashboardCol[] = [
	{ id: "id", label: "ID", minWidth: 170 },
	{ id: "address", label: "Address", minWidth: 100 },
	{ id: "last_appointment", label: "Last Appointment", minWidth: 100 },
	{ id: "next_appointment", label: "Next Appointment", minWidth: 100 },
	{ id: "employee", label: "Employee", minWidth: 100 },
];

function createData(
	id: string,
	address: string,
	last_appointment: string,
	employee: string,
	next_appointment: string
): Dashboard {
	return { id, address, last_appointment, employee, next_appointment };
}

const rows = [
	createData("1", "1234 Main St", "2021-10-01", "John Doe", "2021-10-15"),
	createData("2", "5678 Elm St", "2021-10-02", "Jane Doe", "2021-10-16"),
	createData("3", "91011 Oak St", "2021-10-03", "John Smith", "2021-10-17"),
	createData("4", "121314 Pine St", "2021-10-04", "Jane Smith", "2021-10-18"),
	createData(
		"5",
		"151617 Maple St",
		"2021-10-05",
		"John Johnson",
		"2021-10-19"
	),
	createData(
		"6",
		"181920 Birch St",
		"2021-10-06",
		"Jane Johnson",
		"2021-10-20"
	),
	createData(
		"7",
		"212223 Cedar St",
		"2021-10-07",
		"John Brown",
		"2021-10-21"
	),
	createData(
		"8",
		"242526 Walnut St",
		"2021-10-08",
		"Jane Brown",
		"2021-10-22"
	),
	createData(
		"9",
		"272829 Cherry St",
		"2021-10-09",
		"John White",
		"2021-10-23"
	),
	createData(
		"10",
		"303132 Peach St",
		"2021-10-10",
		"Jane White",
		"2021-10-24"
	),
];

export default function StickyHeadTable() {
	const [page, setPage] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
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
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.id}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													key={column.id}
													align={column.align}
												>
													{column.format &&
													typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 20]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
