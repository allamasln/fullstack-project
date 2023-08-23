import { matchSorter } from 'match-sorter'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

function useSearch(items, keys) {
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredItems, setFilteredItems] = useState(items)

	useEffect(() => {
		if (isEmpty(items)) return

		const matched = matchSorter(items, searchQuery, { keys })

		setFilteredItems(matched)
	}, [searchQuery, items])

	return [filteredItems, searchQuery, setSearchQuery]
}

export default useSearch
