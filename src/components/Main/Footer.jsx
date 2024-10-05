import React from 'react'
import bannerImg from '../../assets/images/bottomBannerr.png'
import SponserImg from '../../assets/images/Sponserss.png'
import SponserXL from '../../assets/images/xlSpons.png'

function Footer() {
  return (
    <>
    <div className='w-screen bg-[#f7f8f9]'>
      <img className='mx-auto' src={bannerImg} alt="" />
    </div>
    <div className="w-full py-10 pl-10 md:pl-0bg-red-400 bg-[#ebeeef] mt-3">
        <div className='flex max-w-[1280px] mx-auto flex-col xl:flex-row gap-10 justify-between'>
            <div className='flex gap-10 justify-around flex-1 flex-col sm:flex-row'>
            <div>
                <h1 className='text-24px font-bold '>Popular Locations</h1>
                <ul className='text-[14px] opacity-60'>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>
            <div>
                <h1 className='text-24px font-bold'>Popular Locations</h1>
                <ul className='text-[14px] opacity-60'>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>

            </div>
            <div className='flex gap-10 flex-1 justify-around sm:flex-row flex-col'>
            <div>
                <h1 className='text-24px font-bold'>Popular Locations</h1>
                <ul className='text-[14px] opacity-60'>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>
            <div>
                <h1 className='text-24px font-bold'>Popular Locations</h1>
                <ul className='text-[14px] opacity-60'>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>

            </div>
        </div>
    </div>
    <div className='w-screen bg-[#002f34]'>
      <img className='w-full mx-auto max-w-[1200px] xl:hidden' src={SponserImg} alt="" />
      <img className='w-full mx-auto max-w-[1200px] hidden xl:block' src={SponserXL} alt="" />
    </div>
    
    </>
    
  )
}



export default React.memo(Footer);