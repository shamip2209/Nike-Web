import React from 'react'
import {offer} from '..//assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
function SpecialOffer() {
  return (
    <section 
      className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className='flex-1 '>
          <img src={offer}
          alt='shoe promotion'
          width={773}
          height={687}
          className='object-contain w-full'
           />
        </div>
       <div className='flex flex-1 flex-col' >

        <h2 className='mt-10 font-palanquin text-4xl font-bold'>
          <span className='text-coral-red inline-block mt-3'>Special </span> Offer</h2>
        <p className='info-text mt-4'>
          Embark on a shopping journey that redefines your experience with unbeatable deals , From premier selections to incredible savings, we offer unparelleled value that sets us apart. 
        </p>
        <p className='info-text mt-6 mb-11'>
         Navigate a realm of possibilities designed to fulfill your unique desires, surprising the loftiest expectations, Your Journey with us is nothing short of exceptional.
        </p>

        <div className='flex flex-wrap gap-4 '>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button label="Learn More"
           backgroundColor='bg-white'
           borderColor='border-slate-gray'
           textColor='text-slate-gray'
         />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer
