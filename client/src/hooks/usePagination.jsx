import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import _ from 'lodash'

function usePagination(items, { pageSize }) {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

	const pageFromURL = +searchParams.get('page')

	const [currentPage, setCurrentPage] = useState(pageFromURL)

	const startIndex = currentPage * pageSize - pageSize
	let paginatedItems = _(items).slice(startIndex).take(pageSize).value()

	useEffect(() => {
		// Update page with new URL values when changed via browser controls.
		if (currentPage === pageFromURL) return

		setCurrentPage(pageFromURL)
	}, [searchParams])

	return [paginatedItems, currentPage, pageSize, setSearchParams]
}

export default usePagination
