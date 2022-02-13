import react from 'react'
import Social from './Social'

export default function Header(props) {
    return (
        <div className='is-relative'>
            <img src='/images/Nav rect.svg' />
            <div className='hero is-overlay'>
                <div class="columns">
                    <div class="column is-three-quarters is-flex is-flex-direction-row pl-6">
                        <img className='ml-6 mt-3' src='/images/Logo.png' />
                        <div class="is-flex is-flex-direction-row mt-5">
                            <Social src='/images/Opensea.svg' />
                            <Social src='/images/Discord.svg' />
                            <Social src='/images/Ig.svg' />
                            <Social src='/images/Twitter.svg' />
                        </div>
                    </div>
                    <div class="column mt-5">
                        <button className='connectBtn button font-jackarmstrong px-5 ml-4'>Connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
