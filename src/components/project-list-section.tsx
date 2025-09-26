import { Express, GSheets, MongoDb, NestJS, NextJS, PostgreSQL, TypeScript, VanillaJs, Vite } from "./icons/badge";


export default function ProjectListSection(){
    return <section id="project-list-section" className="w-full h-screen pt-30 px-50 text-white relative">
        <h1 className="w-fit mx-auto text-4xl">My Projects</h1>
        <ul className="mt-15 text-2xl text-white/75 list-disc flex flex-col gap-3">
            <li className="flex gap-10 h-10">
                <a className="hover:text-white hover:text-3xl transition-color transition-size duration-200 ease-in" href="#ngl-detail">Not Gonna Lie (NGL)</a>
                <h2>[18 June - 10 September]</h2>
                <div className="h-10 flex gap-2 ml-auto">
                    <NestJS title="NestJs" className="w-10 h-10 text-red-700"></NestJS>
                    <PostgreSQL title="Postgres" className="w-10 h-10"></PostgreSQL>
                    <NextJS title="NextJs" className="w-10 h-10 text-black"></NextJS>
                    <TypeScript className="text-blue-500"></TypeScript>
                </div>
            </li>

            <li className="flex gap-10 h-10">
                <a className="hover:text-white hover:text-3xl transition-color transition-size duration-200 ease-in" href="">Vocab Quiz</a>
                <h2>[20 May - 24 June]</h2>
                <div className="h-10 flex gap-2 ml-auto">
                    <Express title="Express" className="w-10 h-10"></Express>
                    <MongoDb title="MongoDB Atlas" className="w-10 h-10 text-green-600"></MongoDb>
                    <VanillaJs title="VanillaJs" className="w-10 h-10 text-yellow-500"></VanillaJs>
                </div>
            </li>

            <li className="flex gap-10 h-10">
                <a className="hover:text-white hover:text-3xl transition-color transition-size duration-200 ease-in" href="">Portfolio</a>
                <h2>[12 September - 20 September]</h2>
                <div className="h-10 flex gap-2 ml-auto">
                    <Vite title="Vite" className="w-10 h-10"></Vite>
                    <TypeScript className="text-blue-500"></TypeScript>
                </div>
            </li>

            <li className="flex gap-10 h-10">
                <a className="hover:text-white hover:text-3xl transition-color transition-size duration-200 ease-in" href="">Food Menu</a>
                <h2>[18 July - 1 August]</h2>
                <div className="h-10 flex gap-2 ml-auto">
                    <GSheets className="w-10 h-10 text-green-600"></GSheets>
                    <VanillaJs title="VanillaJs" className="w-10 h-10 text-yellow-500"></VanillaJs>
                    {/* <svg className="w-10 h-10" fill="#0F9D58" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M171.247,204.376c2.485,0,4.5-2.015,4.5-4.5V61.35h-51.744c-7.502,0-13.605-6.107-13.605-13.614V0H33.13 c-2.485,0-4.5,2.015-4.5,4.5v195.376c0,2.485,2.015,4.5,4.5,4.5H171.247z M52.891,87.627h99.717v80H52.891V87.627z M106.749,143.96 h37.858v15.667h-37.858V143.96z M60.891,119.294h37.858v16.666H60.891V119.294z M60.891,143.96h37.858v15.667H60.891V143.96z M106.749,95.627h37.858v15.667h-37.858V95.627z M106.749,119.294h37.858v16.666h-37.858V119.294z M60.891,95.627h37.858v15.667 H60.891V95.627z M120.397,47.736v-37.34L164.2,51.35h-40.197C122.014,51.35,120.397,49.729,120.397,47.736z"></path> </g></svg> */}
                </div>
            </li>
        </ul>
    </section>
}