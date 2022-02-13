import React from 'react'

function Section2() {
  return (
    <div className='section is-relative' style={{
    }}>
        <div className='columns is-overlay p-6'>
            <div className='column is-two-thirds p-6'>
                <h3 style={{
                    fontSize: '80px',
                    lineHeight: '80px',
                    color: '#FEDE91'
                }} className='font-trashhand'>
                    WHY BUY <br/> LONELY BONES ?
                </h3>
                <p style={{
                    color: '#E1DAB9',
                    fontSize: '30px',
                    lineHeight: '50px'
                }} className='is-uppercase font-trashhand mt-5'>
                    the lonely bones club is a collection of 4,444 lonely heartbroken unique handmade nfts. digital collectibles living on the ethereum blockchain. your “lonely bone” is your membership card into the lonely bones club, grants access to member-only benefits and many more.
                </p>
            </div>
        </div>
        <div className='mt-5'>
        <img className='mt-6' src='/images/Skull image.png'/>
        </div>
    </div>
  )
}

export default Section2