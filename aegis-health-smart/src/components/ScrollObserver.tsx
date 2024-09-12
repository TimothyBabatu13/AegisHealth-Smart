"use client"

import React, { useEffect, createContext } from 'react'

const ScrollContext = createContext<boolean>(false);

function ScrollObserver({children} : {children: React.ReactNode}) {
    const [scrollActive, setScrollActive] = React.useState(false)

    useEffect(() => {
        function handleScroll () {
            if (window) {
                setScrollActive(window.scrollY > 30)
                // console.log(scrollActive, "working")

            }
        }

        if (window) {
            window.addEventListener('scroll', handleScroll)
        }


        return () => {
            if (window) {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    })

  return (
    <ScrollContext.Provider value={scrollActive}>
        <div className='h-full'>
            {children}
        </div>
    </ScrollContext.Provider>
  )
}

export default ScrollObserver
export { ScrollContext };