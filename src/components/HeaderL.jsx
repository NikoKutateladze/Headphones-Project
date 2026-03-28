export default function HeaderL({ content, classContent }) {
    const classTracker =`${classContent} HeaderL`;
    return (
        <>
            <h1 className={classTracker}>{content}</h1>
        </>
    )
}