import react from 'react'

export default function Social(props) {
    return (
        <div style={{
            width: '50px'
        }} className='mx-4'>
            <img style={{
                width: '40px',
                height: '40px'
            }} className='mx-4' src={props.src} />
        </div>
    )
}