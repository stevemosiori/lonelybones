import RoadmapMapEntry from "./RoadMapEntry"

function Section4() {
  return (
    <div className='section is-relative p-0' style={{
        
    }}>
        <div style={{
            background: '#fede91'
        }} className='p-4 m-0'>
            <p style={{
                fontSize: '89px'
            }} className='is-uppercase font-trashhand has-text-centered'>roadmap</p>
            <div className="mt-6"></div>
            <RoadmapMapEntry entryTopic='pre-launch' entryImg='/images/1.png'>
                <p>community growth through marketing campaigns on social media and organic growth! building a strong lonely bones community is our first and #1 priority.</p>
                <p className="mt-3">fair whitelist opportunities for supporters of the lonely bones project</p>
                <p className="mt-3">discord growth and development to ensure our community is as enjoyable as possible</p>
                <p className="mt-3">website release coming by mid-february - launch date finalization and official details</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>

            <RoadmapMapEntry entryTopic='mint' entryImg='/images/2.png'>
                <p>smooth whitelist mint experience.</p>
                <p className="mt-3">fair and gas</p>
                <p className="mt-3">optimized public mint experience to ensure gas fees are low</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>

            <RoadmapMapEntry entryTopic='post-mint and expansion' entryImg='/images/3.png'>
                <p>50% of mint will be stored in a public and transparent wallet to be completely reinvested into the growth and development of the lonely bones project once the roadmap is complete, the remaining funds will be used on roadmap v2.0 (decided by the community)</p>
                <p className="mt-3">extensive marketing through influencers and celebrities...you might even see your favorite bones on a billboard (; - floor sweeping funded by the team; the nfts purchased will be held in the community wallet</p>
                <p className="mt-3">partnerships/collaborations with other strong nft communities</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>

            <RoadmapMapEntry entryTopic='community growth' entryImg='/images/3.png'>
                <p>the lonely bones aims to create the best and most supportive community out there expect constant private events, tournaments, giveaways, special guests, and more. these will not only give holders the chance to win great prizes, but also the opportunity to learn and improve yourself.</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>

            <RoadmapMapEntry entryTopic='art expansion and the lonely bones brand' entryImg='/images/4.png'>
                <p>the lonely bones will be recreated in various forms and airdropped to holders. expect rare forms of your favorite lonely bones</p>
                <p className="mt-3">animated versions, pixel art, and more!</p>
                <p className="mt-3">in-house artists to create custom poses or versions of your lonely bones</p>
                <p className="mt-3">lonely bones merchandise and collectibles will be launched!</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>
            <RoadmapMapEntry entryTopic='metaverse' entryImg='/images/5.png'>
                <p>the lonely bones meet the metaverse</p>
                <p className="mt-3">recreation in 3d form to join the metaverse.</p>
                <p className="mt-3">the lonely bones club will have our own location in the metaverse to hangout! after the initial portal to the metaverse, we plan to join other metaverses, too.</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>

            <RoadmapMapEntry entryTopic='roadmap v2.0' entryImg='/images/6.png'>
                <p>to be decided by the community via fair and anonymous voting.</p>
            </RoadmapMapEntry>
            <div className="mt-6"></div>
            <div className="mt-6"></div>
            <div className="columns is-centered">
                <div className="column is-half">
                    <img src="/images/Image-3.png" alt="" />
                </div>
            </div>
        </div>
        <div style={{
            background: '#16202a'
        }} className=''>
            <img style={{
                    width: '100%',
                }} src='/images/Roadmap bg.png' alt=""/>
        </div>
    </div>
  )
}

export default Section4