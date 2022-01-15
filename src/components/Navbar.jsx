import React from 'react'
import { Switch } from '@headlessui/react'

function Navbar({ enabled, setEnabled }) {
    return (
        <nav className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} flex justify-between items-center py-8 drop-shadow-xl`}>
            <h1 className='pl-4 font-extrabold text-xl'>Where in the World?</h1>
            <div className='flex items-center pr-4'>
                <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-[#eeeeee]' : 'bg-[#202D36]'}
                relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9 bg-[#444]' : 'translate-x-0 bg-[#eeeeee]'}
                    pointer-events-none inline-block h-[34px] w-[34px] rounded-full shadow-lg transform ring-0 transition ease-out duration-200 delay-300`}
                />
                </Switch>
            </div>
        </nav>
    )
}

export default Navbar
