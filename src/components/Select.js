import React from 'react'
import DropDownArrow from 'components/icons/DropDownArrow'
import styled from 'styled-components'
import BaseSelect from 'react-select'

const DropdownWrapper = styled.div`
  padding: 8px 12px;
`
const DropdownIndicator = () => {
  return (
    <DropdownWrapper>
      <DropDownArrow />
    </DropdownWrapper>
  )
}

const Select = props => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #586e94',
      backgroundColor: '#253755',
      color: state.isSelected ? 'white' : '#586e94',
      padding: 12,
      '&:hover': {
        backgroundColor: 'white',
      },
      ':last-child': {
        borderBottom: 'none',
      },
    }),
    dropdownIndicator: provided => ({ ...provided }),
    container: provided => ({
      ...provided,
      width: '100%',
    }),
    menu: provided => ({
      ...provided,
      borderRadius: 14,
    }),
    indicatorSeparator: () => ({}),
    placeholder: provided => ({ ...provided, color: '#586e94' }),
    menuList: provided => ({
      ...provided,
      backgroundColor: '#253755',
      borderRadius: 14,
      border: '1px solid #586e94',
    }),
    control: provided => ({
      ...provided,
      backgroundColor: '#253755',
      borderRadius: 14,
      border: '1px solid #586e94',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'
      return { ...provided, opacity, transition, color: 'white' }
    },
  }
  return (
    <BaseSelect
      styles={customStyles}
      components={{ DropdownIndicator }}
      {...props}
    />
  )
}

export default Select
