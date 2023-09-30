import { useRouteError } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<Box component='header' id='error-page'>
			<Typography variant='h1'>Oops!</Typography>
			<Typography variant='body1'>Sorry, an unexpected error has occurred.</Typography>
			<Typography variant='body2' fontStyle='italic'>
				{error.statusText || error.message}
			</Typography>
		</Box>
	)
}
