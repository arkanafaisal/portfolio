import { useState } from "react";
import { Express, MongoDb, NestJS, NextJS, PostgreSQL, Prisma, React, TailwindCss, TypeScript, VanillaJs } from "./icons/badge";
import DropdownIcons from "./icons/dropdown";


export default function ProjectDetailsSection(){
    const [showFrontend, setShowFrontend] = useState(false)
    const [showBackend, setShowBackend] = useState(false)

    return <section id="project-details-section" className="w-full text-white text-xl px-30">
        <ul>
            <li id="ngl-detail" className="h-screen w-full flex pt-30 pb-10 overflow-hidden">
                <div className="flex flex-col w-80">
                    <h1 className="text-4xl mb-8">Not Gonna Lie (NGL)</h1>
                    <div className="flex-1 ml-2 px-3">

                        <ul className="list-disc">
                            <li>Source Code : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>Frontend URL : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">https://</a></li>
                            <li>Backend API Endpoint : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>
                                <h2 onClick={()=>{setShowFrontend(!showFrontend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px]  ${!showFrontend && '-rotate-90'}`}></DropdownIcons>
                                    Frontend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showFrontend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>server side rendering (NextJS)</li>
                                    <li>error response handling</li>
                                    <li>responsive ui (tailwind)</li>
                                    <li>user-experience (React)</li>
                                    <li>input validation (typescript)</li>
                                </ul>
                            </li>
                            <li>
                                <h2 onClick={()=>{setShowBackend(!showBackend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px] ${!showBackend && '-rotate-90'}`}></DropdownIcons>
                                    Backend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showBackend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>hashed password (bcrypt)</li>
                                    <li>token auth (JWT)</li>
                                    <li>request validation (Nest DTO)</li>
                                    <li>rate limiting (Nest Throttle)</li>
                                    <li>permission-based access</li>
                                    <li>database SQL (Postgres)</li>
                                    <li>ORM (Prisma)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 ml-15 border-6 border-white/90 overflow-hidden rounded-xl bg-black/50">
                    <h2 className="w-full bg-black pl-5 py-[6px]">Preview</h2>
                </div>
                <div className="w-36 shrink-0 h-fit animate-moveY mb-20 ml-auto grid grid-cols-2 gap-2">
                    <NestJS title="NestJs" className="text-red-700"></NestJS>
                    <NextJS title="NextJs" className="text-black"></NextJS>
                    <Prisma title="Prisma" className=""></Prisma>
                    <PostgreSQL className="dd"></PostgreSQL>
                    <TypeScript className="text-blue-500"></TypeScript>
                    <React title="React" className="text-blue-500"></React>
                    <TailwindCss className="text-blue-500"></TailwindCss>
                </div>
            </li>
            <li id="vocab-detail" className="h-screen w-full flex pt-30 pb-10 overflow-hidden">
                <div className="flex flex-col w-80">
                    <h1 className="text-4xl mb-8">Vocab Quiz</h1>
                    <div className="flex-1 ml-2 px-3 w-full">

                        <ul className="list-disc w-full">
                            <li>Source Code : <a href="https://github.com/arkanafaisal/vocab" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>Frontend URL : <a href="https://arkanafaisal.github.io/vocab/frontend" className="text-blue-400 text-base hover:text-blue-600 underline ml-3 truncate">https://arkanafaisal.github.io/vocab/frontend</a></li>
                            <li>Backend API Endpoint : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>
                                <h2 onClick={()=>{setShowFrontend(!showFrontend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px]  ${!showFrontend && '-rotate-90'}`}></DropdownIcons>
                                    Frontend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showFrontend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>single page app (VanillaJs)</li>
                                    <li>client side rendering (VanillaJs)</li>
                                    <li>error response handling</li>
                                    <li>responsive (tailwind)</li>
                                </ul>
                            </li>
                            <li>
                                <h2 onClick={()=>{setShowBackend(!showBackend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px] ${!showBackend && '-rotate-90'}`}></DropdownIcons>
                                    Backend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showBackend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>hashed password (bcrypt)</li>
                                    <li>token auth (JWT)</li>
                                    <li>database No-SQL (mongoDb)</li>
                                    <li>cors safety (express cors)</li>
                                    <li>cookie-secure (cookie-parser)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 ml-15 border-6 border-white/90 overflow-hidden rounded-xl bg-black/50">
                    <h2 className="w-full bg-black pl-5 py-[6px]">Preview</h2>
                </div>
                <div className="w-36 shrink-0 h-fit animate-moveY mb-20 ml-auto grid grid-cols-2 gap-2">
                    <Express className="text-white-500"></Express>
                    <MongoDb className="text-green-700"></MongoDb>
                    <VanillaJs className="text-yellow-500"></VanillaJs>
                    <TailwindCss className="text-blue-500"></TailwindCss>
                </div>
            </li>
            
            <li id="portfolio-detail" className="h-screen w-full flex pt-30 pb-10 overflow-hidden">
                <div className="flex flex-col w-80">
                    <h1 className="text-4xl mb-8">Portfolio</h1>
                    <div className="flex-1 ml-2 px-3">

                        <ul className="list-disc">
                            <li>Source Code : <a href="https://github.com/arkanafaisal/portfolio" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>Frontend URL : <a href="https://arkanafaisal.github.io/vocab/frontend" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">https://</a></li>
                            <li>Backend API Endpoint : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>
                                <h2 onClick={()=>{setShowFrontend(!showFrontend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px]  ${!showFrontend && '-rotate-90'}`}></DropdownIcons>
                                    Frontend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showFrontend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>single page app (VanillaJs)</li>
                                    <li>client side rendering (VanillaJs)</li>
                                    <li>error response handling</li>
                                    <li>responsive (tailwind)</li>
                                </ul>
                            </li>
                            <li>
                                <h2 onClick={()=>{setShowBackend(!showBackend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px] ${!showBackend && '-rotate-90'}`}></DropdownIcons>
                                    Backend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showBackend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>hashed password (bcrypt)</li>
                                    <li>token auth (JWT)</li>
                                    <li>database No-SQL (mongoDb)</li>
                                    <li>cors safety (express cors)</li>
                                    <li>cookie-secure (cookie-parser)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 ml-15 border-6 border-white/90 overflow-hidden rounded-xl bg-black/50">
                    <h2 className="w-full bg-black pl-5 py-[6px]">Preview</h2>
                </div>
                <div className="w-36 shrink-0 h-fit animate-moveY mb-20 ml-auto grid grid-cols-2 gap-2">
                    <Express className="text-white-500"></Express>
                    <MongoDb className="text-green-700"></MongoDb>
                    <VanillaJs className="text-yellow-500"></VanillaJs>
                    <TailwindCss className="text-blue-500"></TailwindCss>
                </div>
            </li>
            
            <li id="food-menu-detail" className="h-screen w-full flex pt-30 pb-10 overflow-hidden">
                <div className="flex flex-col w-80">
                    <h1 className="text-4xl mb-8">Vocab Quiz</h1>
                    <div className="flex-1 ml-2 px-3">

                        <ul className="list-disc">
                            <li>Source Code : <a href="https://github.com/arkanafaisal/vocab" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>Frontend URL : <a href="https://arkanafaisal.github.io/vocab/frontend" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">https://</a></li>
                            <li>Backend API Endpoint : <a href="https://github.com/arkanafaisal/ngl" className="text-blue-400 text-base hover:text-blue-600 underline ml-3">github repository</a></li>
                            <li>
                                <h2 onClick={()=>{setShowFrontend(!showFrontend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px]  ${!showFrontend && '-rotate-90'}`}></DropdownIcons>
                                    Frontend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showFrontend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>single page app (VanillaJs)</li>
                                    <li>client side rendering (VanillaJs)</li>
                                    <li>error response handling</li>
                                    <li>responsive (tailwind)</li>
                                </ul>
                            </li>
                            <li>
                                <h2 onClick={()=>{setShowBackend(!showBackend)}} className="cursor-pointer flex">
                                    <DropdownIcons className={`h-6 w-6 translate-y-[2px] ${!showBackend && '-rotate-90'}`}></DropdownIcons>
                                    Backend Feature :</h2>
                                <ul className={`text-base ml-2 overflow-hidden transition-size duration-100 linear ${showBackend? 'max-h-300' : 'max-h-0'}`}>
                                    <li>hashed password (bcrypt)</li>
                                    <li>token auth (JWT)</li>
                                    <li>database No-SQL (mongoDb)</li>
                                    <li>cors safety (express cors)</li>
                                    <li>cookie-secure (cookie-parser)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 ml-15 border-6 border-white/90 overflow-hidden rounded-xl bg-black/50">
                    <h2 className="w-full bg-black pl-5 py-[6px]">Preview</h2>
                </div>
                <div className="w-36 shrink-0 h-fit animate-moveY mb-20 ml-auto grid grid-cols-2 gap-2">
                    <Express className="text-white-500"></Express>
                    <MongoDb className="text-green-700"></MongoDb>
                    <VanillaJs className="text-yellow-500"></VanillaJs>
                    <TailwindCss className="text-blue-500"></TailwindCss>
                </div>
            </li>
        </ul>
    </section>
}