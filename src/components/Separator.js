import styled from 'styled-components'
import { up } from '@xstyled/system'

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #1e2d48;
  margin-top: 10px;
  ${up('md', 'margin-top: 20px;')}
`

export default Separator
