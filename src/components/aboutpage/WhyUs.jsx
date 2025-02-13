import React from 'react'
import CommonOrangeHeading from '../common/CommonOrangeHeading'
import CommonHeadingBlack from '../common/CommonHeadingBlack'
import CommonParagraph from '../common/CommonParagraph'
import { WHY_US_CARDS_DATA } from '../../utils/helper'

const WhyUs = () => {
    return (
        <div className='container max-w-[1180px]'>
            <div className='flex items-center flex-col'>
                <CommonOrangeHeading
                    text="Why Us"
                    className="mb-3 text-center mx-auto"
                />
                <CommonHeadingBlack
                    text="Why Choose Us?"
                    className="mb-4 max-sm:mb-3 max-w-[557px] text-center mx-auto"
                />
                <CommonParagraph
                    text="As Best Packers and Movers in South Goa"
                    className="max-w-[890px] opacity-70 text-black text-center"
                />
                <div className="flex flex-row flex-wrap -mx-3 max-sm:pt-8 sm:pt-12 md:pt-14 lg:pt-[60px]">
                    {WHY_US_CARDS_DATA.map((item, index) => (
                        <div key={index} className={`w-6/12 sm:w-4/12 md:w-3/12 px-3 ${index === 2 && "max-sm:mt-8"} ${index === 3 && "max-sm:mt-8 max-md:mt-10"} ${index === 4 && "max-sm:mt-8 mt-10"} ${index === 5 && "max-sm:mt-8 mt-10"} ${index === 6 && "max-sm:mt-8 mt-10"} ${index === 7 && "max-sm:mt-8 mt-10"}`}>
                            <div className="flex items-center flex-col">
                                <img className="w-12 h-12 object-contain" src={item.image} alt="icon" />
                                <p className="max-lg:max-w-[160px] max-sm:text-sm text-black font-medium text-base text-center mx-auto lg:text-xl leading-118 mt-3">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyUs