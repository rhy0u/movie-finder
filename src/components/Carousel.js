import React from 'react'
import Slider from 'react-slick'
import SliderPreviousArrow from 'components/icons/SliderPreviousArrow'
import SliderNextArrow from 'components/icons/SliderNextArrow'
import useWindowSize from '@rehooks/window-size'
import { up } from '@xstyled/system'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styled, { css } from 'styled-components'

const StyledCarousel = styled(Slider)`
  &.slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  &.slick-slider .slick-list {
    div + div {
      margin-left: 20px;
    }
    ${up(
      'md',
      css`
        margin: 0 70px;
        div + div {
          margin-left: 0;
        }
      `,
    )};
  }
`

const StyledButton = styled.div`
  translate-x: 50%;
  translate-y: 50%;
  width: 60px;
  height: 60px;
  opacity: 0.7;
  background-color: #253755;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  &:hover {
    background-color: #fff;
  }
  transition: background-color 0.2s ease-in;

  ${p => (p.variant === 'next' ? 'right: 0;' : 'left: 0;')};
`

const Arrow = ({ onClick, variant = 'previous' }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {variant === 'previous' ? <SliderPreviousArrow /> : <SliderNextArrow />}
  </StyledButton>
)

const Carousel = ({ slidesToShow, children }) => {
  const windowSize = useWindowSize()
  return windowSize.innerWidth > 768 ? (
    <StyledCarousel
      infinite={false}
      prevArrow={<Arrow variant="previous" />}
      nextArrow={<Arrow variant="next" />}
      slidesToShow={slidesToShow}
    >
      {children}
    </StyledCarousel>
  ) : (
    <StyledCarousel
      infinite={false}
      arrows={false}
      slidesToShow={1}
      swipeToSlide
      variableWidth
    >
      {children}
    </StyledCarousel>
  )
}

export default Carousel
