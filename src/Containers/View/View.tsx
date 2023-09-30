import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const view = () => {
	const TESTDATA = [
		{
			id: '1', name: 'name1', contact: 'contact1', requestedService: 'HVAC', status: 'recieved',
		},
		{
			id: '2', name: 'name2', contact: 'contact2', requestedService: 'Plumbing', status: 'recieved',
		},
		{
			id: '3', name: 'name3', contact: 'contact3', requestedService: 'Electrical', status: 'recieved',
		},
	]
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align='right'>ID</TableCell>
						<TableCell align='right'>Contact Information</TableCell>
						<TableCell align='right'>Requested Service</TableCell>
						<TableCell align='right'>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{TESTDATA.map((row) => {
						return (
							<TableRow key={row.name} >
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.id}</TableCell>
								<TableCell align='right'>{row.contact}</TableCell>
								<TableCell align='right'>{row.requestedService}</TableCell>
								<TableCell align='right'>{row.status}</TableCell>
							</TableRow>
						)
					},
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default view
