import Movies from '@/components/Movies'
import React from 'react'

const Page = async ({ params }) => {
    try {
        const keyword = params.keyword
        const apiKey = "1d5dad3345b663e244653304e46b496f"
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`)
        const data = await res.json()

        return (
            <div>
                {
                    !data?.results ?
                        <div>Aradığınız film bulunamadı</div> :
                        <div className='flex flex-wrap gap-2'>
                            {data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))}
                        </div>
                }
            </div>
        )
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching data:', error);
        return <div>Something went wrong. Please try again later.</div>;
    }
}

export default Page