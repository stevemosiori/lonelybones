import Member from "./Member"

function Section5() {
  return (
    <div className='section is-relative p-0' style={{
        
    }}>
        <div style={{
            background: '#16202a'
        }} className='p-4 m-0'>
            <p style={{
                fontSize: '89px',
                color: '#FEDE91',
            }} className='is-uppercase font-trashhand has-text-centered'>roadmap</p>
            <div className="mt-6"></div>
            <div className="columns is-centered">
                <div className="column is-one-quarter">
                    <Member memberName='pabcasso' memberRole='founder &amp; artist' memberImg='/images/Image-2.png' />
                </div>
                <div className="column is-one-quarter">
                <Member memberName='udu' memberRole='discord guru' memberImg='/images/Image-1.png' />
                </div>
                <div className="column is-one-quarter">
                <Member memberName='zinc' memberRole='marketing' memberImg='/images/Image.png' />
                </div>
            </div>
        </div>
        <div style={{
            background: '#16202a'
        }} className=''>
            <img src='/images/Footer rect.svg' alt=""/>
        </div>
    </div>
  )
}

export default Section5