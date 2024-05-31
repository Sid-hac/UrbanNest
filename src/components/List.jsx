import { listData } from "@/lib/dummydata"
import Card from "./Card"


const List = () => {
  return (
    <div className="flex flex-col gap-6">
        {listData.map((item) => (
            <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List