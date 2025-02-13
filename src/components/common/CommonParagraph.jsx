import React from 'react'

const CommonParagraph = ({ ...props }) => {
    return (
        <p className={`${props.className} font-normal max-sm:text-sm text-base !leading-125 text-black`}>{props.text}</p>
    )
}

export default CommonParagraph