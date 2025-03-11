import React from 'react'
import Hero from '../common/Hero'
import BillData from '../billspage/BillData'

const BillsPage = () => {
  return (
    <>
      <Hero
        orangeText="Express Cargo Packers and Movers"
        headingText="Bill for Claim in India"
        headingClass="max-w-[700px] max-lg:max-w-[600px] max-md:max-w-[450px] max-sm:max-w-[320px]"
        paragraph="Packers and Movers in Jaipur Bills For Claim - TAX INVOICE"
        btnClass="!hidden"
        background="bg-bill  sm:h-[375px] md:h-[440px] xl:h-[570px]"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <BillData />
    </>
  )
}

export default BillsPage;
