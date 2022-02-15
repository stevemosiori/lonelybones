import Social from './Social'

export default function Header(props) {
    return (
        <div className='is-relative'>
            <div style={{
                    background: '#7e5455'
                }} className='hero is-clipped'>
                <div class="columns is-mobile">
                    <div class="column is-three-quarters is-flex is-flex-direction-row pl-6">
                        <img id='logoTop' className='mt-3' src='/images/Logo.png' alt=''/>
                        <div class="is-flex is-flex-direction-row mt-5 is-hidden-mobile">
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
            <img style={{
                    width: '100%',
                }} src='/images/Nav rect.png' alt='' />
        </div>
    )
}
