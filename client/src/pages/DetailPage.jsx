import { useFetch } from '../hooks'
import { useParams, Link } from 'react-router-dom'

import {
	Button,
	Image,
	Spinner,
	List,
	HStack,
	VStack,
	Heading,
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'

import { ListItem } from '../components'
import { getCountry } from '../services/countryService'

function DetailPage() {
	const { countryId } = useParams()

	const [country = {}, isLoading] = useFetch(getCountry, countryId)

	if (isLoading) return <Spinner />

	return (
		<VStack spacing="5rem" align="start" fontSize="16px">
			<Button variant="with-icon" leftIcon={<ArrowBackIcon />} as={Link} to="/">
				Back
			</Button>

			<HStack
				alignItems="center"
				justifyContent="space-between"
				w="100%"
				spacing="6rem"
			>
				<Image src={country.flag} alt={country.name} />

				<VStack align="start" w="100%" spacing="23px">
					<Heading as="h2" fontSize="32px">
						{country.name}
					</Heading>

					<HStack w="100%" justifyContent="space-between" alignItems="initial">
						Top Level Domain: .be Currencies: Euro Languages: Dutch, French,
						German
						<List lineHeight="32px">
							<ListItem label="Native Name">{country.nativeName}</ListItem>
							<ListItem label="Population">{country.population}</ListItem>
							<ListItem label="Region">{country.region}</ListItem>
							<ListItem label="Sub Region">{country.subregion}</ListItem>
							<ListItem label="Capital">{country.capital}</ListItem>
						</List>
						<List lineHeight="32px">
							<ListItem label="Top Level Domain">
								{country.topLevelDomain}
							</ListItem>
							<ListItem label="Currencies">{country.currencies}</ListItem>
							<ListItem label="Languages">{country.languages}</ListItem>
						</List>
					</HStack>

					<HStack spacing="10px" mt="47">
						<Button>Germany</Button>
						<Button>France</Button>
					</HStack>
				</VStack>
			</HStack>
		</VStack>
	)
}

export default DetailPage
