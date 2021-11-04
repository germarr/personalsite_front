import Head from 'next/head'
import Projectcard from '../../components/projects/Projectcard'

export default function ytb_dash({navigation}) {
    return (
        <div>
            <Head>
            <title>Projects</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-200">
                <div className='flex justify-center mt-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-16 sticky'>
                    <h1 className='font-bold text-3xl text-white'>Check out some of my projects.</h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>
                    {navigation.map(({title,link_photo, link_button,description, tech1,tech2,tech3, link_github})=>(
                        <Projectcard name={title} projectImg={link_photo} button={link_button} description={description} techOne={tech1[0]} techTwo={tech2[0]} techThree={tech3[0]} github={link_github}/>
                    ))}
                </div>
            </div>
            <div>    
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const cmspath = "https://strapi.legisladoresmx.fun/"
    
    const project_list = await fetch(`${cmspath}projectlists/`).then(r=>r.json())

    console.log(project_list[0].link_button)

    return{
        props:{
            navigation:project_list
        }
    }

}
