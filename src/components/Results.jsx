import React from 'react'

function Results({ enabled, apiResults }) {
    return (
        <section className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} flex flex-col justify-center items-center py-6`}>
                {apiResults.map((result) => {
                    const { numericCode, flags, name, population, region, capital } = result

                    return(
                        <div className="mb-8 drop-shadow-xl">
                            <img key={numericCode} src={flags.png} alt="" className='w-64'/>
                            <div key={numericCode} className={`${enabled ? 'bg-[#eeeeee]' : 'bg-[#202D36]'} w-64 pl-6 py-6 rounded-b-lg`}>
                                <h1 key={numericCode} className='font-extrabold text-xl'>{name.common}</h1>
                                <p key={numericCode} className='text-sm'><span className='text-base font-semibold'>Population:</span> {population}</p>
                                <p key={numericCode} className='text-sm'><span className='text-base font-semibold'>Region:</span> {region}</p>
                                <p key={numericCode} className='text-sm'><span className='text-base font-semibold'>Capital:</span> {capital}</p>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default Results
