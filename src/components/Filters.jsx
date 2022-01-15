import React from 'react'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'

function Filters({ enabled, selected, setSelected, regions, input, handleInput }) {
    return (
        <section className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} flex flex-col justify-center items-center py-8 text-sm lg:flex-row lg:justify-between`}>
            {/* BÚSQUEDA */}
            <div className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} flex items-center py-3 px-4 rounded-lg drop-shadow-xl lg:ml-6`}>
                <button>
                    <SearchIcon
                    alt="" 
                    className={`w-5 ${enabled ? 'fill-[#121315]' : 'fill-white'}`}
                    />
                </button>
                <input type="text" placeholder='Search for a country...' className={`${enabled ? 'text-[#121315] caret-[#121315] bg-white' : 'text-white caret-white bg-[#2B3743]'} pl-8 font-light focus: outline-none`} value={input} onChange={handleInput} />
            </div>

            {/* FILTROS */}
            <div className="py-4 w-52 drop-shadow-xl z-10 lg:mr-6">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                    <Listbox.Button className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} relative w-full py-3 pl-3 pr-10 text-left rounded-lg shadow-md cursor-pointer focus:outline-none`}>
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDownIcon
                            alt=""
                            className={`w-5 ${enabled ? 'fill-[#121315]' : 'fill-white'}`}
                        />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={`${enabled ? 'text-[#121315] bg-white' : 'text-white bg-[#2B3743]'} absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm`}>
                        {regions.map((region, regionIdx) => (
                            <Listbox.Option
                            key={regionIdx}
                            className={`cursor-pointer select-none relative py-2 pl-10 pr-4`
                            }
                            value={region}
                            >
                            {({ selected, active }) => (
                                <>
                                <span
                                    className={`${
                                    selected ? 'font-medium' : 'font-normal'
                                    } block truncate`}
                                >
                                    {region.name}
                                </span>
                                {selected ? (
                                    <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                ) : null}
                                </>
                            )}
                            </Listbox.Option>
                        ))}
                        </Listbox.Options>
                    </Transition>
                    </div>
                </Listbox>
            </div>
        </section>
    )
}

export default Filters
