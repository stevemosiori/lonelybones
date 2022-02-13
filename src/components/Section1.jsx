import React from 'react'

function Section1() {
  return (
    <div className='hero' style={{
        marginTop: '-80px'
    }}>
        <div className='columns is-vcentered'>
            <div className='column is-two-thirds'>
                <img src="/images/Hero image.png" alt="" />
            </div>
            <div className='column'>
                <img className='mint' src='/images/Mint button.svg' />
            </div>
        </div>
    </div>
  )
}

export default Section1