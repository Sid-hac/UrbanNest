import { Link } from "react-router-dom"

const Card = ({item }) => {
  return (
    <div>
        <div>
            <Link>
               <img src={item.img} alt="" />
            </Link>
        </div>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    item: 
  }

export default Card