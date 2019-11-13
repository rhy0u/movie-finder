import styled, { css } from 'styled-components'
import { up } from '@xstyled/system'

const Title = styled.h2`
  font-size: 16px;
  padding-top: 30px;
  padding-bottom: 20px;
  color: #fff;
  ${up(
    'md',
    css`
      font-size: 26px;
      padding-top: 70px;
      padding-bottom: 36px;
    `,
  )}
`
export default Title
