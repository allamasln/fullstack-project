import { httpService } from './httpService'

import { pick } from 'lodash'

let endpoint = '/countries'

const getCountryList = async () => {
	const { data } = await httpService.get(endpoint)

	const countryList = data.map((country) =>
		pick(country, ['_id', 'name', 'capital', 'flag', 'population', 'region'])
	)

	return countryList
}

const getCountry = async (countryId) => {
	const { data } = await httpService.get(`${endpoint}/${countryId}`)

	const country = {
		...data,
		topLevelDomain: data.topLevelDomain.join(', '),
		currencies: data.currencies.join(', '),
		languages: data.languages.join(', '),
	}

	return country
}

export { getCountryList, getCountry }
