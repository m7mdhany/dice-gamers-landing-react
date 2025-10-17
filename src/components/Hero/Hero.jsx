import React from 'react'
import logo from "../../assets/imgs/logo.png"
const Hero = () => {
  return (
    <div className='md:h-96 md:my-10'>
      <div className='h-full md:flex hidden justify-center items-center gap-5 md:px-20'>
        <div className='flex flex-col items-end w-1/2 gap-10'>
          <h1 className='w-full text-end font-bold text-2xl lg:text-7xl'>DICE GAMERS</h1>
          <p className=''>
            وجهتك المثالية لألعاب الطاولة المصنوعة يدويًا بجودة عالية. سواء كنت من عشاق التحديات الاستراتيجية، المغامرات المثيرة، أو الأوقات العائلية المرحة، لدينا ما يناسبك تمامًا. اكتشف مجموعتنا المميزة من الألعاب المصنوعة من الخشب والأكريليك، المصممة خصيصًا لرفع مستوى تجربتك في اللعب.
          </p>
        </div>
        <img className='h-full' src={logo} alt="" />
      </div>
      {/*  */}
      <div className='h-full flex flex-col justify-center items-center gap-5 md:hidden'>
        <img className='h-full' src={logo} alt="" />
        <div className='flex flex-col items-end gap-10'>
          <h1 className='font-bold self-end text-3xl text-nowrap text-center w-full'>DICE GAMERS</h1>
          <p className='text-center'>
            وجهتك المثالية لألعاب الطاولة المصنوعة يدويًا بجودة عالية. سواء كنت من عشاق التحديات الاستراتيجية، المغامرات المثيرة، أو الأوقات العائلية المرحة، لدينا ما يناسبك تمامًا. اكتشف مجموعتنا المميزة من الألعاب المصنوعة من الخشب والأكريليك، المصممة خصيصًا لرفع مستوى تجربتك في اللعب.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
