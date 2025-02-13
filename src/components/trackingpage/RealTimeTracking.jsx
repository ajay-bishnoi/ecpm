import CommonHeadingBlack from '../common/CommonHeadingBlack'
import CommonParagraph from '../common/CommonParagraph'
import CommonOrangeHeading from '../common/CommonOrangeHeading'

const RealTimeTracking = () => {
    return (
        <div className='max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36'>
            <div className='container max-w-[1180px]'>
                <div className='flex items-center flex-col'>
                    <CommonOrangeHeading
                        text="Real-Time Tracking"
                        className="mb-3 text-center mx-auto"
                    />
                    <CommonHeadingBlack
                        text="Packers and Movers Jaipur! Service Areas"
                        className="mb-4 max-sm:mb-3 max-w-[557px] text-center mx-auto"
                    />
                    <CommonParagraph
                        text="Working process of Packers and Movers in Jaipur is easy and hassle free, Simply share your shifting Requirement, either it is Household shifting, Office Shifting, Vehicle Shifting etc. We will analyze your requirements and give you best price quote for your moving immediately. Once confirmation of booking is done, Packers and Movers in Jaipur will take care of your valuable belongings pack and deliver them safe and on-time."
                        className="max-w-[890px] opacity-70 text-black text-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default RealTimeTracking