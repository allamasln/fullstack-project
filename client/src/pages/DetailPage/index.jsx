import { useFetch } from '../../hooks'
import { useParams, Link } from 'react-router-dom'

import {
	Button,
	Image,
	Spinner,
	List,
	HStack,
	VStack,
	Stack,
	Heading,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'

import { ListItem } from '../../components'
import { getCountry } from '../../services/country-service'

function DetailPage() {
	const directionBreak = useBreakpointValue({ base: 'column', md: 'row' })
	const { countryId } = useParams()

	const [country = {}, isLoading] = useFetch(getCountry, countryId)

	if (isLoading) return <Spinner />

	return (
		<VStack
			spacing={{ base: '60px', md: '5rem' }}
			align="start"
			fontSize="16px"
		>
			<Button
				variant="with-icon"
				leftIcon={<ArrowBackIcon />}
				as={Link}
				to={-1}
			>
				Back
			</Button>

			<Stack
				alignItems="center"
				justifyContent="space-between"
				w="100%"
				spacing={{ base: '60px', md: '6rem' }}
				direction={directionBreak}
			>
				<Image src={country.flag} alt={country.name} />

				<VStack align="start" w="100%" spacing="2rem">
					<Heading as="h2" fontSize="32px">
						{country.name}
					</Heading>

					<Stack
						w="100%"
						justifyContent="space-between"
						alignItems="initial"
						direction={directionBreak}
						spacing="3rem"
					>
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
					</Stack>

					<Stack direction={directionBreak} spacing="1rem">
						<Text fontWeight="bold" lineHeight="24px">
							Border Countries:
						</Text>
						<HStack spacing="10px">
							{country.borders.map((border) => (
								<Button
									key={border._id}
									as={Link}
									to={'/country/' + border._id}
								>
									{border.name}
								</Button>
							))}
						</HStack>
					</Stack>
				</VStack>
			</Stack>
		</VStack>
	)
}

export default DetailPage
