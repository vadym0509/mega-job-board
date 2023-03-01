import '../styles/globals.css'
import { useState } from 'react'
import {Container} from './index.styles'
import {NextSeo} from "next-seo"
import { HomeHeader } from '../components/common/HomeHeader/HomeHeader'
import { AppContext } from '../context/AppContext'
import { HomeFooter } from '../components/common/HomeFooter/HomeFooter'

function MyApp({ Component, pageProps }) {
  const [location, setLocation] = useState("US")

  return (
      <div>
          <NextSeo
              title="Local Job Search Engine | Jobs Bear"
              description="Search 500000+ job openings from the top employers. Find and apply to job openings found directly on company websites."
          />
          <Container>
            <HomeHeader
                title="Your Job is Our Job"
                text="Over 167,457 jobs are available in our site, go ahead and find yours."
                buttonTitle="Search Jobs"
                setLocation={setLocation}
                location={location}
            />
            <AppContext.Provider value={{location: location}}>
              <Component {...pageProps} />
            </AppContext.Provider>
            <HomeFooter />
          </Container>
      </div>
  )
}

export default MyApp
