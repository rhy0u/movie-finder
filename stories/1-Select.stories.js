import React, { useState } from 'react'
import Select from 'components/Select'

export default {
  title: 'Select',
}

export const select = () => {
  const [value, setValue] = useState()
  return (
    <Select
      value={value}
      onChange={setValue}
      label="Genre"
      options={[
        { label: 'Tous', value: undefined },
        { label: 'Action', value: 'action' },
        { label: 'Horreur', value: 'horror' },
        { label: 'Amour', value: 'love' },
      ]}
    />
  )
}

select.story = {
  name: 'select',
}
