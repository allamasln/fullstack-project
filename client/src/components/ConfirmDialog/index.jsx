import { useRef } from 'react'

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

function ConfirmDialog({ isOpen, onClose, title, to }) {
	const cancelRef = useRef()

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						{title}
					</AlertDialogHeader>

					<AlertDialogBody>Are you sure?</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} variant="solid" onClick={onClose}>
							Cancel
						</Button>
						<Button
							variant="solid"
							colorScheme="red"
							onClick={onClose}
							ml={3}
							as={Link}
							to={to}
						>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}
export default ConfirmDialog
