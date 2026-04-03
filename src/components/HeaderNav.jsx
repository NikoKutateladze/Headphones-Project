import { Link } from "react-router-dom";

export default function HeaderNav({ navContent }) {
    let contentTrack = `/${navContent.toLowerCase()}`;
    const contentCheck = navContent.toLowerCase() === 'home' 
    ? "/"
    : `/${navContent.toLowerCase()}`; 
    return (
        <>
            <Link to={contentCheck} className="section">{navContent}</Link>
        </>
    )
}