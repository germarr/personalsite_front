import Link from "next/link"
export default function Projectcard({name, projectImg,button,description,techOne, techTwo, techThree, github}) {
    return (
        <div className="p-10 pb-2">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={projectImg} alt="Mountain" />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2 text-gray-800 font-semibold">
                        {name}
                    </div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div>         
                    <div className="px-6 text-lg mb-2 text-gray-800 font-semibold">
                        Some tech used in this project
                    </div>      
                    <div className="flex space-x-6 items-center justify-center">
                        <a title={techOne.nameoftech} href={techOne.linkoftech}><img className="w-24 shadow-md rounded-sm" alt={`${techOne.nameoftech}_logo`} src={techOne.imageoftech} /></a>
                        <a title={techTwo.nameoftech}  href={techTwo.linkoftech}><img className="w-24 shadow-md rounded-sm" alt={`${techTwo.nameoftech}_logo`} src={techTwo.imageoftech} /></a>
                        <a title={techThree.nameoftech}  href={techThree.linkoftech}><img className="w-24 shadow-md rounded-sm" alt={`${techThree.nameoftech}_logo`} src={techThree.imageoftech} /></a>
                    </div>
                </div>
                <div className="flex space-x-3 my-4 px-5 pt-4 pb-2">
                    <a href={github}>
                        <p className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">
                            Github
                        </p>
                    </a>
                    <a href={button}>
                        <p className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">
                            Live Project
                        </p>
                    </a>
                </div>
            </div>
    </div>    
    )
}
