import { useState } from 'react'

import {
	Box, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField,
} from '@mui/material'

const Create = () => {
	const [ service, setService ] = useState<string>('')

	return (
		<Box
			component='form'
			sx={{
				minWidth: 120,
				maxWidth: '33%',
				margin: 'auto',
			}}
		>
			<Typography variant='h4' gutterBottom>
				Service Request Form
			</Typography>

			<Typography variant='body2' gutterBottom>
				Please fill out the following form to request service. We will contact you as soon as possible.
			</Typography>

			<TextField
				id='Customer-Name'
				aria-describedby='Name'
				label='Name'
				style={{ width: '100%' }}
				margin='normal'
			/>

			<TextField
				id='Contact-Information'
				aria-describedby='Contact Information'
				label='Contact Information'
				style={{ width: '100%' }}
				margin='normal'
			/>

			<FormControl margin='normal' style={{ width: '100%' }}>
				<InputLabel id='Requested-Service-Label'>Requested Service</InputLabel>
				<Select
					id='Requested-Service'
					value={service}
					labelId='Requested-Service-Label'
					label='Requested Service'
					onChange={(e: SelectChangeEvent) => setService(e.target.value)}
				>
					<MenuItem value='HVAC'>Heat, Vacumes or Air Conditioning</MenuItem>
					<MenuItem value='Plumbing'>Plumbing</MenuItem>
					<MenuItem value='Electrical'>Electrical</MenuItem>
					<MenuItem value='Appliance'>Appliance</MenuItem>
					<MenuItem value='Other'>Other</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default Create

