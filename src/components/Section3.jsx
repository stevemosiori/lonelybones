import React from 'react'
import Nft from './Nft'

function Section3() {
  return (
    <div className='section is-relative p-0' style={{
    }}>
        <div style={{
            marginTop: '240px'
        }} className='is-overlay p-4'>
            <div id='NftsTop' className='columns is-multiline is-3'>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 18.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 19.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 21.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 20.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 22.png' />
                </div>
            </div>
            <div id='NftsBottom' className='columns is-multiline is-3 mt-6'>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 25.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 24.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 26.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 23.png' />
                </div>
                <div className='column is-one-fifth'>
                    <Nft src='/images/Group 27.png' />
                </div>
            </div>
        </div>
        <div style={{
            marginTop: '-150px'
        }} className=''>
        <img className='mt-6' src='/images/NFT bg.svg'/>
        </div>
    </div>
  )
}

export default Section3