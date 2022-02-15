
function Section1() {
  return (
    <div className='hero' style={{
        // marginTop: '-80px',
    }}>
        <div className='columns is-vcentered is-mobile'>
            <div className='column is-two-thirds'>
                <img style={{
                    width: '100%',
                }} src="/images/Hero image.png" alt="" />
            </div>
            <div className='column'>
                <img style={{
                    width: '100%',
                }} className='mint' src='/images/Mint button.svg' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section1