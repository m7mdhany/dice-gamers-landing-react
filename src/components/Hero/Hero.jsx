import React from 'react'

const Hero = () => {
  return (
    <div className='h-96 my-10'>
      <div className='h-full flex justify-center items-center gap-5 px-20'>
        <div className='flex flex-col items-end w-1/2 gap-10'>
          <h1 className='text-7xl font-bold self-end'>DICE GAMERS</h1>
          <p className=''>
            وجهتك المثالية لألعاب الطاولة المصنوعة يدويًا بجودة عالية. سواء كنت من عشاق التحديات الاستراتيجية، المغامرات المثيرة، أو الأوقات العائلية المرحة، لدينا ما يناسبك تمامًا. اكتشف مجموعتنا المميزة من الألعاب المصنوعة من الخشب والأكريليك، المصممة خصيصًا لرفع مستوى تجربتك في اللعب.
          </p>
        </div>
        <img className='h-full' src="/src/assets/imgs/logo.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
