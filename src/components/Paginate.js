import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { up } from '@xstyled/system'

const PaginateWrapper = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-top: 15px;
    ${up('md', 'margin-top: 50px;')}
    flex-wrap: wrap;
  }
  .break {
    display: none;
  }
  a {
    color: #586e94;
    text-decoration: none;
  }
  ul {
    padding: 0;
  }
  li {
    margin: 15px 6px 0;
    list-style: none;
    border: 2px solid transparent;
  }

  a {
    border-radius: 14px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #fff;
    }

    transition: background-color 0.2s ease-in;
  }
  .page,
  .next,
  .previous {
    border-radius: 14px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 2px #253755;
    cursor: pointer;
  }
  .active {
    background-color: #253755;

    border-radius: 14px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 2px #253755;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #253755;
    }
  }
`

const Paginate = ({ className, ...props }) => {
  return (
    <PaginateWrapper className={className}>
      <ReactPaginate
        {...props}
        containerClassName="pagination"
        pageLinkClassName="page"
        activeClassName="active"
        previousClassName="previous"
        breakClassName="break"
        nextClassName="next"
      />
    </PaginateWrapper>
  )
}

export default Paginate
