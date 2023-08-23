import {
	Card as ChakraCard,
	CardHeader,
	CardBody,
	Image,
	Stack,
	Heading,
} from '@chakra-ui/react'

import styled from '@emotion/styled'

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

function Card({ title, image, children }) {
	return (
		<ChakraCard>
			<CardHeader p={0}>
				<StyledImage src={image} />
			</CardHeader>
			<CardBody p="24px 24px 46px">
				<Stack spacing="16px">
					<Title as="h3">{title}</Title>

					{children}
				</Stack>
			</CardBody>
		</ChakraCard>
	)
}
export default Card
