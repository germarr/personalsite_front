import Link from "next/link"
import Image from "next/image"

function ProjectCard({title, paragraph ,href,src}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-3">
                <div className="">
                    <a>
                        <div className="w-full h-full relative">
                            <Image objectFit="contain" layout="fill" className="shadow-xl rounded-tl-lg rounded-br-lg" src={src} alt="" />
                        </div>
                    </a>
                </div>
                <div className="">
                    <h2 className="text-sm md:text-xl font-bold truncate text-gray-800">{title}</h2>
                    <p className="text-gray-600 text-xs md:text-lg">{paragraph}</p>
                    <div className="mt-3">
                        <a href={href}>
                        <button class="bg-pink-800 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded hover:cursor-pointer text-xs md:text-lg">
                        Live Project
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
