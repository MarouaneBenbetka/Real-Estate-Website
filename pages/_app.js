import '../styles/globals.css'
import Layout from '../components/shared/Layout.jsx'
import { SessionProvider } from 'next-auth/react'
import { MantineProvider } from '@mantine/core'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function MyApp ({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        theme={{
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            serif: ['Garamond']
          }
        }}
        withGlobalStyles
      >
        <Layout>
        <ToastContainer position='top-center' />{' '} 
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  )
}

export default MyApp
