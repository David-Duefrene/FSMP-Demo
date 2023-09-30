import {
	Box, Card, CardContent, CardActions, Button, Typography, Link,
} from '@mui/material'

import './Home.css'

const Home = () => {
	return (
		<Box
			component='span'
			sx={{
				display: 'inline-block', mx: '2px', transform: 'scale(0.8)',
			}}
		>
			<Card variant='outlined'>
				<CardContent>
					<Typography sx={{ fontsize: 14 }} color='text.secondary' gutterBottom>
						Hello
					</Typography>
					<Typography variant='body2'>Field Service Request Management</Typography>
				</CardContent>
				<CardActions>
					<Link href='/create'>Create Request</Link>
				</CardActions>
			</Card>
		</Box>
	)
}

export default Home
