export default function BookComponent(props) {
    return (
        <>
            <p>Title: {props.title}</p>
            <p>ISBN: {props.isbn}</p>
            <p>Available: {props.available}</p>
            <p>Price: {props.price}</p>
        </>
    );
}
