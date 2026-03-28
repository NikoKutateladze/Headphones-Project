export default function HeaderNav({ navContent }) {
    let contentTrack;
    const contentCheck = navContent.toLowerCase() === 'home' ? contentTrack = '/' : contentTrack = navContent.toLowerCase(); 
    return (
        <>
            <a href={contentTrack} className="section">{navContent}</a>
        </>
    )
}