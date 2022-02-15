
function Section1() {
  return (
    <div id="section1" className='hero'>
        <div className='columns is-vcentered'>
            <div className='column is-two-thirds'>
                <img style={{
                    width: '100%',
                }} src="/images/Hero image.png" alt="" />
            </div>
            <div className='column is-flex is-justify-content-center'>
                <img style={{
                    width: '100%',
                }} id="mintBtn" className='mint' src='/images/Mint button.svg' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section1