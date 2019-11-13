import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from 'components/GlobalStyle'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px;
`

addDecorator(story => (
  <>
    <GlobalStyle />
    <Wrapper>{story()}</Wrapper>
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module)
