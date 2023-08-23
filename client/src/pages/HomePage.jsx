import { useState, useEffect } from 'react'
import { getCountryList } from '../services/countryService'

import { SimpleGrid, Stack, List, Spinner } from '@chakra-ui/react'

import { useFetch, useSearch, usePagination } from '../hooks'
import {
	Card,
	ListItem,
	SearchBox,
	FilterSelect,
	Pagination,
} from '../components'

import { isEmpty } from 'lodash'

function HomePage() {
	const [selectedRegion, setSelectedRegion] = useState('')

	const [countries = [], isLoading] = useFetch(getCountryList)

	const [filteredCountries, searchQuery, setSearchQuery] = useSearch(
		countries,
		['name', 'capital', 'region']
	)

	const filteredAndCategorizedByRegion = selectedRegion
		? filteredCountries.filter((country) => country.region === selectedRegion)
		: filteredCountries

	const [paginatedCountries, currentPage, pageSize, setSearchParams] =
		usePagination(filteredAndCategorizedByRegion, { pageSize: 4 })

	useEffect(() => {
		// Set page to 1 if not the first render and the query changes.
		if (isEmpty(countries)) return

		setSearchParams({ page: 1 })
	}, [searchQuery])

	const handleRegionChange = (e) => {
		setSelectedRegion(e.target.value)
		setSearchParams({ page: 1 })
	}

	if (isLoading) return <Spinner />

	return (
		<Stack fontSize="14px" spacing="2rem">
			<Stack
				direction={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
				spacing="2rem	"
			>
				<SearchBox
					query={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				<FilterSelect
					selectedOption={selectedRegion}
					onChange={handleRegionChange}
					placeholder="Filter by Region"
					options={[
						{ value: 'Africa', label: 'Africa' },
						{ value: 'Americas', label: 'Americas' },
						{ value: 'Asia', label: 'Asia' },
						{ value: 'Europe', label: 'Europe' },
						{ value: 'Oceania', label: 'Oceania' },
					]}
				/>
			</Stack>

			<SimpleGrid
				spacing={6}
				columns={{ base: 1, md: 4 }}
				justifyContent={{ base: 'center', md: 'space-between' }}
				gridTemplateColumns="repeat(auto-fit, 264px)"
			>
				{paginatedCountries.map((country) => (
					<Card
						key={country._id}
						title={country.name}
						itemId={country._id}
						image={country.flag}
					>
						<List lineHeight="16px" spacing="8px">
							<ListItem label="Poblation">{country.population}</ListItem>
							<ListItem label="Region">{country.region}</ListItem>
							<ListItem label="Capital">{country.capital}</ListItem>
						</List>
					</Card>
				))}
			</SimpleGrid>

			<Pagination
				itemCount={filteredAndCategorizedByRegion?.length}
				pageSize={pageSize}
				currentPage={currentPage}
			/>
		</Stack>
	)
}
export default HomePage
