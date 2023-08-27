import {
	Card as ChakraCard,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	LinkBox,
	LinkOverlay,
	HStack,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react'

import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import ConfirmDialog from '../ConfirmDialog'

const StyledImage = styled(Image)`
	height: 160px;
	width: 100%;
	object-fit: cover;
`

const Title = styled(Heading)`
	font-size: 18px;
	font-weight: 800;
	line-height: 26px;
`

function Card({ title, image, itemLabel, itemId, children }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<LinkBox as={ChakraCard} boxShadow="none">
			<ChakraCard>
				<CardHeader p={0}>
					<StyledImage src={image} />
				</CardHeader>
				<CardBody p="24px 24px 46px">
					<Stack spacing="16px">
						<LinkOverlay as={Link} to={`/${itemLabel}/${itemId}`}>
							<Title as="h3" noOfLines={1}>
								{title}
							</Title>
						</LinkOverlay>

						{children}
					</Stack>
				</CardBody>
				<CardFooter
					sx={{
						position: 'absolute',
						bottom: '0',
						right: '0',
					}}
				>
					<HStack spacing="8px">
						<IconButton
							as={Link}
							to={`/${itemLabel}/${itemId}/update`}
							aria-label="Edit"
							icon={<EditIcon />}
							variant="solid"
							colorScheme="blue"
						/>
						<IconButton
							aria-label="Delete"
							icon={<DeleteIcon />}
							variant="solid"
							colorScheme="red"
							onClick={onOpen}
						/>
						<ConfirmDialog
							isOpen={isOpen}
							onClose={onClose}
							title={`Delete ${itemLabel}`}
							to={`/${itemLabel}/${itemId}/delete`}
						/>
					</HStack>
				</CardFooter>
			</ChakraCard>
		</LinkBox>
	)
}
export default Card
