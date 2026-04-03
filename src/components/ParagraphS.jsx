export default function ParagraphS({ content, classContent }) {
    const name = `ParagraphS ${classContent}`;
    return <p className={name}>{content}</p>
}