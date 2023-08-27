import { useState, useEffect } from 'react'
import { getCountryList } from '../../services/country-service'

import {
	SimpleGrid,
	Stack,
	List,
	Spinner,
	Button,
	Spacer,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { AddIcon } from '@chakra-ui/icons'

import { useFetch, useSearch, usePagination } from '../../hooks'
import {
	Card,
	ListItem,
	SearchBox,
	FilterSelect,
	Pagination,
} from '../../components'

import { isEmpty } from 'lodash'

import { regions } from '../../constants'

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
			<Stack direction="row" justifyContent="space-between" spacing="2rem	">
				<SearchBox
					query={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<Spacer />
				<FilterSelect
					selectedOption={selectedRegion}
					onChange={handleRegionChange}
					placeholder="Filter by Region"
					options={regions}
				/>
				<Button
					variant="solid"
					colorScheme="blue"
					leftIcon={<AddIcon />}
					as={Link}
					to="/country/new"
				>
					New Country
				</Button>
			</Stack>

			<SimpleGrid
				spacing={6}
				columns={{ base: 1, md: 4 }}
				justifyContent={{ base: 'center', md: 'space-between' }}
				gridTemplateColumns="repeat(auto-fill, 264px)"
			>
				{paginatedCountries.map((country) => (
					<Card
						itemLabel="country"
						itemId={country._id}
						key={country._id}
						title={country.name}
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
