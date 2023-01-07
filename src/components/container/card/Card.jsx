function Card({data}){
    const {title,description} = data
    return(<>
    <h2>{title}</h2>
    <p>{description}</p>
    </>)
}
export default Card