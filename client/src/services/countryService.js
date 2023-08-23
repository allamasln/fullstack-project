import { httpService } from './httpService'

import { pick } from 'lodash'

const endpoint = '/countries'

const getCountryList = async () => {
	const { data } = await httpService.get(endpoint)

	const countryList = data.map((country) =>
		pick(country, ['name', 'capital', 'flag', 'population', 'region'])
	)

	return countryList
}

export { getCountryList }
