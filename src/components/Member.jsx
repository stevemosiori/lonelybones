export default function Member(props) {
    return (
        <div>
            <img src={props.memberImg} alt="" />
            <p style={{
                color: '#FEDE91',
            }} className="has-text-centered is-size-3 font-jackarmstrong">{props.memberName}</p>
            <p style={{
                color: '#FEDE91',
            }} className="has-text-centered is-size-4 font-trashhand">{props.memberRole}</p>
        </div>
    );
}