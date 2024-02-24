'use client'
import { Button } from '../ui/button';
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'
import Image from 'next/image'
import WeddingFeatures from './features';
import Testimony from '../common/testimony';
import WeddingPostal from './card';
import { WeddingPostalData } from '@/lib/dummyData'

const WeddingComponent = () => {
    return (
        <>
            <div className="w-full bg-[#FDF3D8] pt-5 sm:pt-[38px] pb-5 sm:pb-[60px]">
                <div className="container px-4 sm:px-20 flex flex-col gap-5 sm:flex-row justify-between">
                    <div className="w-full sm:w-[622px] pt-[32px] sm:pt-[64px] px-5 sm:px-10 pb-[30px] sm:pb-[90px] flex flex-col bg-white space-y-4 sm:space-y-8 rounded-2xl">
                        <h1 className="text-[28px] sm:text-[56px] font-bold text-[#212529] sm:leading-[64px]">Treepz for Weddings</h1>
                        <div className="flex space-y-8 flex-col text-lg sm:text-xl">
                            <p>Weddings are tough to plan. Finding wedding transportation shouldn’t be.</p>
                            <p>With over 5000 positive reviews and satisfied couples nationwide, our promise is to provide you and your loved ones with a 5-Star Experience on your special day.</p>
                        </div>
                        <Button
                            variant={"default"}
                            className="cursor-pointer rounded-full w-fit sm:w-[151px] mt-8 sm:mt-[60px] text-black flex items-center gap-2"
                            //onClick={() => {}}
                        >
                            Book a vehicle
                            <ChevronRightIcon />
                        </Button>
                    </div>
                    <div className="w-full sm:w-[622px] h-[360px] sm:h-[620px] relative overflow-hidden rounded-2xl">
                        <Image
                            src="/wedding-hero.png"
                            alt="Wedding"
                            fill
                            priority
                            className="absolute object-contain"
                        />
                    </div>
                </div>
            </div>
            <WeddingFeatures />
            <Testimony />
            <div className="container px-4 sm:px-20 flex justify-between items-center flex-col sm:flex-row">
                {WeddingPostalData.map(({ src, title, description}) => (
                    <WeddingPostal src={src} title={title} description={description} key={src} />
                ))}
            </div>
            <div className='w-full my-[70px] py-[48px] sm:py-[73px] bg-[url(/wedding-bg.png)] bg-cover bg-no-repeat h-fit px-4 sm:px-0'>
                    <div className="w-full mx-auto text-white">
                        <h1 className="text-[28px] sm:text-[56px] font-semibold leading-[40px] sm:leading-[64px] text-center mb-2">Inquire about Treepz Wedding Transportation</h1>
                        <p className="text-xl text-center">Use the button below to get in touch with us</p>
                        <Button
                            variant={"default"}
                            className="cursor-pointer rounded-full font-medium text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px] mx-auto"
                            //onClick={() => {}}
                        >
                            Contact us
                        </Button>
                    </div>
            </div>
        </>
    )
}


export default WeddingComponent