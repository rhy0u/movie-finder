import React from 'react'
import styled, { css } from 'styled-components'
import { up } from '@xstyled/system'
import Logo from 'components/icons/Logo'
import TopMovies from 'components/TopMovies'
import Separator from 'components/Separator'
import AllMovies from './components/AllMovies'
import backgroundImage from '../icons/backgroundimg.png'

const PageWrapper = styled.div`
  background-color: #0d1d38;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  padding: 24px 30px;
  ${up(
    'md',
    css`
      padding: 32px 92px;
    `,
  )}
`

const App = () => {
  return (
    <PageWrapper>
      <Logo />
      <TopMovies />
      <Separator />
      <AllMovies />
    </PageWrapper>
  )
}

export default App
