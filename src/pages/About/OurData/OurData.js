import React from 'react'

import './OurData.css'

const OurData = () => {
  return (
    <div className='container our-data'>
        <h1 style={{marginTop: "-10%"}}>Our Community</h1> <br/>
        <div className='grid-container'>
            <div>
                <h1>2+</h1>
                <p>years of experience</p>
            </div>

            <div>
                <h1>34</h1>
                <p>Team Members</p>
            </div>

            <div>
                <h1>13000</h1>
                <p>Customers served</p>
            </div>

            <div>
                <h1>60</h1>
                <p>Dishes</p>
            </div>

        </div>
    </div>
  )
}

export default OurData