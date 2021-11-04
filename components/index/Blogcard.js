export default function Blogcard({publishedAt,Title, Content,slug }) {
    return (
        <div className="md:grid md:grid-cols-12 md:gap-2 flex-row my-8">
          <div className="mx-16 md:mx-0 md:col-start-1 col-span-1 md:col-span-2">
            <h3 className="text-gray-700 font-bold">{publishedAt.substring(0,10)}</h3>
          </div>
          <div className="mx-16 my-2 md:mx-0 md:my-0 md:col-start-3 md:col-span-10">
            <h3 className="text-gray-700 text-lg font-bold">{Title}</h3>
            <p className="text-gray-600 font-normal">{Content.substring(0,510) + "..."}</p>
            <div className="mt-1">
                <a className="text-blue-900 hover:text-blue-800 hover:underline" href={`./blog/${slug}`}>Read More ➡</a>
            </div>
          </div>
        </div>
    )
}
