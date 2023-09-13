import Button from "./Button";

const Card = ( { title , description , img }) => {
    return (
        <div className= "card">
            <img src="" alt="" />
            <div className= "card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">{description}</p>

            </div>
            <Button text ={"boton de card"} cb={() => console.log("cb")}></Button>
        </div>
    )
 }

 export default Card

