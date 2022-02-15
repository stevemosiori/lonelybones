import Member from "./Member"
import Social from "./Social"

function Section5() {
  return (
    <div className='section is-relative p-0'>
        <div style={{
            background: '#16202a'
        }} className='p-4 m-0'>
            <p style={{
                fontSize: '89px',
                color: '#FEDE91',
            }} className='is-uppercase font-trashhand has-text-centered'>team</p>
            <div className="mt-6 teamTextSpacer"></div>
            <div className="columns is-centered">
                <div className="column is-one-quarter teamMember">
                    <Member memberName='pabcasso' memberRole='founder &amp; artist' memberImg='/images/Image-2.png' />
                </div>
                <div className="column is-one-quarter teamMember">
                <Member memberName='udu' memberRole='discord guru' memberImg='/images/Image-1.png' />
                </div>
                <div className="column is-one-quarter teamMember">
                <Member memberName='zinc' memberRole='marketing' memberImg='/images/Image.png' />
                </div>
            </div>
        </div>
        <div style={{
            background: '#16202a'
        }} className=''>
            <img style={{
                    width: '100%',
                }} src='/images/Footer rect.png' alt=""/>
        </div>
        <div style={{
            background: '#7e5455'
        }} className='pb-3'>
            <div className="container">
                <div className="columns is-centered">
                    <div id="bottomLogo" className="column is-flex is-flex-direction-row is-justify-content-left pl-6">
                        <img className="ml-6" src='/images/Logo.png' alt=''/>
                    </div>
                    <div id="bottomSocials" class="column is-half is-flex is-flex-direction-row is-justify-content-center pl-6">
                        <div class="is-flex is-flex-direction-row mt-5">
                            <Social src='/images/Opensea.svg' />
                            <Social src='/images/Discord.svg' />
                            <Social src='/images/Ig.svg' />
                            <Social src='/images/Twitter.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5