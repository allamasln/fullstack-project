import { useState, useEffect } from 'react'
import { getCountryList } from '../services/countryService'

import { SimpleGrid, List } from '@chakra-ui/react'

import { Card, ListItem } from '../components'

function HomePage() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		getCountryList().then(setCountries)
	}, [])

	return (
		<SimpleGrid
			fontSize="14px"
			spacing={6}
			columns={{ base: 1, md: 4 }}
			justifyContent="center"
			gridTemplateColumns={{
				base: 'repeat(auto-fit, 264px)',
				md: 'repeat(auto-fit, minmax(264px, 1fr))',
			}}
		>
			{countries.map((country) => (
				<Card key={country.name} title={country.name} image={country.flag}>
					<List lineHeight="16px" spacing="8px">
						<ListItem label="Poblation">{country.population}</ListItem>
						<ListItem label="Region">{country.region}</ListItem>
						<ListItem label="Capital">{country.capital}</ListItem>
					</List>
				</Card>
			))}
		</SimpleGrid>
	)
}
export default HomePage
