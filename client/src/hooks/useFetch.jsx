import { useEffect, useState } from 'react'

function useFetch(fn, params) {
	const [items, setItems] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		fn(params)
			.then(setItems)
			.catch(setErrors)
			.finally(() => setIsLoading(false))
	}, [params])

	return [items, isLoading, errors]
}

export default useFetch
