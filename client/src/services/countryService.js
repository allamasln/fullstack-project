import countries from '../../data.json'

import { pick } from 'lodash'

const getCountryList = () => {
	return countries.map((country) =>
		pick(country, ['name', 'capital', 'flag', 'population', 'region'])
	)
}

export { getCountryList }
