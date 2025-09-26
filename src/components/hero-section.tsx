import me from '../assets/me2.png'

import { B2, Express, Git, MongoDb, NestJS, NextJS, PostgreSQL, React, TailwindCss, TypeScript, Vite } from './icons/badge'

export default function HeroSection(){
    return <section id='hero-section' className=" flex justify-between text-white w-full h-screen lg:pl-30 pt-30">
        <div className='flex-1'>
            <div className='h-fit flex w-full gap-10 mt-10'>
                <div id='picture-container' className="ml-5 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 bg-white rounded-full overflow-hidden">
                    <img className='-translate-y-[12.5%]' src={me} alt="error" />
                </div>  
                <div id='text-container' className='h-30 sm:h-40 lg:h-50 flex-1 flex flex-col'>
                    <div className='flex flex-col justify-center flex-1'>
                        <h1 className='text-5xl'>Arkana Faisal Ridho</h1>
                        <p className='text-2xl mt-2'>fullstack developer</p>

                    </div>
                    <button className='text-2xl underline w-fit shrink-0 cursor-pointer hover:text-blue-500 mt-1 mb-2 hover:mt-0 hover:text-3xl transition-all duration-200 ease-out'>Contact Me</button>
                </div>
            </div>

            <div className='mt-20 pl-25 pr-30 text-lg'>
                <p>Ready to turn ideas into functional app feature, from concept to implementation, using modern tools and best practices.</p>
            </div>
        </div>
        <div id='badge-container' className='h-fit animate-moveY mr-40 grid grid-cols-3 gap-3 shrink-0'>
            <NestJS title='NestJs (proficient)' className='text-red-600 w-15 h-15 hover:w-17 hover:h-17 border-green-500 hover:border-b-3 rounded-xl m-1 hover:m-0 transition-size duration-200 linear'></NestJS>
            <Express title='ExpressJs (beginner)' className='text-white w-15 h-15 hover:w-17 hover:h-17 border-red-500 hover:border-b-3 rounded-xl m-1 hover:m-0 transition-size duration-200 linear'></Express>
            <div className='border-yellow-500 hover:border-b-3 rounded-xl transition-size duration-200 linear'>
                <div className='bg-white/90 rounded-full w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 transition-size duration-200 linear'><NextJS title='NextJs (intermediate)' className='w-15 h-15 hover:w-17 hover:h-17 text-black transition-size duration-200 linear'></NextJS></div>
            </div>
            <Vite title='Vite (intermediate)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-yellow-500 hover:border-b-3 rounded-xl transition-size duration-200 linear'></Vite>
            <PostgreSQL title='Postgres (beginner)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-red-500 hover:border-b-3 rounded-xl fill-blue-500 transition-size duration-200 linear'></PostgreSQL>
            <MongoDb title='MongoDB (beginner)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-red-500 hover:border-b-3 rounded-xl text-green-700 transition-size duration-200 linear'></MongoDb>
            <TypeScript title='Typescript (intermediate)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-yellow-500 hover:border-b-3 rounded-xl text-blue-500 transition-size duration-200 linear'></TypeScript>
            <React title='React (intermediate)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-yellow-500 hover:border-b-3 rounded-xl text-blue-500 transition-size duration-200 linear'></React>
            <TailwindCss title='TailwindCSS (proficient)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-green-500 hover:border-b-3 rounded-xl text-blue-500 transition-size duration-200 linear'></TailwindCss>
            <Git title='Git (intermediate)' className='w-15 h-15 hover:w-17 hover:h-17 m-1 hover:m-0 border-yellow-500 hover:border-b-3 rounded-xl text-red-500 transition-size duration-200 linear'></Git>
            <B2 title='B2 english CEFR' className='w-15 h-15 cursor-default hover:w-17 hover:h-17 m-1 hover:m-0 border-yellow-500 hover:border-b-3 rounded-xl transition-size duration-200 linear'></B2>
        </div>
    </section>
}