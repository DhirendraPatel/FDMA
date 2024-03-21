import React from 'react'
import TopHeading from './TopHeading'
import Services from './Services'

export default function ServiceSection() {
  return (
    <div className="max-w-7xl mx-auto px-2"> <br/> <br/>
      <div id='contact' className='flex flex-col gap-y-16 bg-center bg-no-repeat py-10' style={{cursor: "pointer"}}>
          <TopHeading/>
          <Services/>
      </div>
    </div>
  )
}
