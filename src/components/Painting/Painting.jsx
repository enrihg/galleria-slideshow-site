function Painting({name, img, artist}){
    return (
        <div>
            <h3>{name}</h3>
            <h4>{artist}</h4>
            <img src={img} alt={name} />
        </div>
    )
}

export default Painting;