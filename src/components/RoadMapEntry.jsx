export default function RoadmapMapEntry(props) {
    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-one-fifth">
                    <img className="is-pulled-right" src={props.entryImg} alt="" />
                </div>
                <div className="column is-three-fifths">
                    <p className="is-size-4 font-jackarmstrong">{props.entryTopic}</p>
                    <div className="font-trashhand is-size-4 mt-5">
                    {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}