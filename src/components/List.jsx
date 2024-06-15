
import Card from "./Card"


const List = ({posts}) => {
  return (
    <div className="flex flex-col gap-6">
        {posts.map((item) => (
            <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List