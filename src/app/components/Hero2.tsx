import React from 'react';
import Image from 'next/image';



export const Hero2 = () => {
  return (
    <div className="bg-[#F2F0FF] w-full h-auto flex flex-col items-center justify-center lg:flex-row  p-4 lg:px-10  ">


      {/* Right Section */}
      <div className="relative mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full absolute -top-8 right-5 lg:right-12"></div>
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

        {/* Hero Image */}
        <img
          src="Sofa-Chair- 1.png"
          alt="Hero"
          width={300}
          height={300}
          className="absolute top-[25px] md:top-[30px] lg:top-[0px] right-12 lg:right-0 w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[370px] xl:h-[370px] rounded-full"
        />
        {/* <img src="Sofa-Chair- 1.png" alt="Furniture Chair"
          width={106}
          height={189}
          className="object-contain w-[310px] xl:h-[310px] " /> */}

        {/* Discount Badge */}

      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">



        {/* <Image
          src=""
          alt="Hero"
          width={380}
          height={300}
          className="w-[260px] h-[200px] md:w-[300px] md:h-[240px] xl:w-[380px] xl:h-[300px]"
        /> */}







        <div className="flex-1">
          <h3 className="text-xl font-bold text-purple-700 mb-4">
            Unique Features Of Latest & Trending Products
          </h3>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>
              All frames constructed with hardwood solids and laminates.
            </li>
            <li>
              Reinforced with double wood dowels, glue, screws, nails at
              corner blocks, and machine nails.
            </li>
            <li>Arms, backs, and seats are structurally reinforced.</li>
          </ul>
          <div className="mt-8">
            <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
              Add To Cart
            </button>
            <p className="mt-2 text-sm text-gray-500">
              B&B Italian Sofa - $32.00
            </p>
          </div>
        </div>











        {/* <div className="text-center lg:text-left ">
          <h4 className="text-[#FB2E86] text-[16px] font-[lato] font-bold">
            Best Furniture For Your Castle...
          </h4>
          <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-bold font-[Josefin Sans] mt-2">
            New Furniture Collection <br /> Trends in 2020
          </h2>
          <p className="text-[14px] md:text-[16px] font-[lato] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br /> in phasellus non in justo.
          </p>
          <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
            Shop Now
          </button>
        </div> */}
      </div>
    </div>
  )
}

