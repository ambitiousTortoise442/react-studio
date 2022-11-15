// TODO: create a component that displays a single bakery item

export default function BakeryItem({index, item, handleClick}) {
    return (
        <>
            <div key={index}>
                <img src={item.image} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button onClick={() => handleClick(item)}>Price: {item.price}</button>
            </div>
        </>
    );
}