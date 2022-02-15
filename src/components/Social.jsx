
export default function Social(props) {
    return (
        <div style={{
            width: '50px'
        }} className='mx-2'>
            <img style={{
                width: '40px',
                height: '40px'
            }} className='mx-2' src={props.src} alt="" />
        </div>
    )
}