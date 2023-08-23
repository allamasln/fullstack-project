import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import router from './router'
import theme from './theme'

import '@fontsource/nunito-sans'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>
)
