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
import { Assign, AssignCol } from "../../Models/Assign";

const columns: readonly AssignCol[] = [
	{ id: "id", label: "ID", minWidth: 170 },
	{ id: "address", label: "Address", minWidth: 100 },
	{ id: "age", label: "Age", minWidth: 100 },
	{ id: "gender", label: "Gender", minWidth: 100 },
	{ id: "language", label: "Language", minWidth: 100 },
];

function createData(
	id: string,
	address: string,
	age: number,
	gender: string,
	language: string
): Assign {
	return { id, address, age, gender, language };
}

const rows = [
	createData("1", "1234 Main St", 15, "M", "English"),
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
