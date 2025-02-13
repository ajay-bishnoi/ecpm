import React from 'react'

const CommonOrangeHeading = ({...props}) => {
  return (
    <span className={`font-medium text-nowrap max-sm:text-base text-lg !leading-116 text-light-orange ${props.className}`}>{props.text}</span>
)
}

export default CommonOrangeHeading