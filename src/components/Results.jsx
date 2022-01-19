import React from 'react'
import { Link } from 'react-router-dom'

function Results({ enabled, apiResults }) {
    return (
        <section className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} flex flex-col justify-center items-center py-6 md:grid md:grid-cols-2 md:gap-2 md:place-items-center lg:grid-cols-3 xl:gap-4 xl:grid-cols-4 2xl:grid-cols-5`}>
                {apiResults.map((result) => {
                    const { index, flags, name, population, region, capital } = result

                    return(
                        <Link to={`/name/${index}`}>
                            <div className="mb-8 drop-shadow-xl">
                                <img key={index} src={flags.png} alt="" className='w-64'/>
                                <div key={index} className={`${enabled ? 'bg-[#eeeeee]' : 'bg-[#202D36]'} w-64 pl-6 py-6 rounded-b-lg`}>
                                    <h1 key={index} className='font-extrabold text-xl'>{name.common}</h1>
                                    <p key={index} className='text-sm'><span className='text-base font-semibold'>Population:</span> {population}</p>
                                    <p key={index} className='text-sm'><span className='text-base font-semibold'>Region:</span> {region}</p>
                                    <p key={index} className='text-sm'><span className='text-base font-semibold'>Capital:</span> {capital}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
        </section>
    )
}

export default Results
