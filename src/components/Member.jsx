export default function Member(props) {
    return (
        <div>
            <div className="is-flex">

            <img src={props.memberImg} alt="" />
            </div>
            <p style={{
                color: '#FEDE91',
            }} className="has-text-centered is-size-3 font-jackarmstrong">{props.memberName}</p>
            <p style={{
                color: '#FEDE91',
            }} className="has-text-centered is-size-4 font-trashhand">{props.memberRole}</p>
        </div>
    );
}