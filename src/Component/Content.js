import { useEffect, useState } from "react"
import axios from "axios";
export default function Content() {

    const [content, setContent] = useState(0)
    const [foodlist , setFoodList] = useState([])
    useEffect(() => {
        console.log("Start")

        axios.get('http://localhost:8000/getfood').then((result)=>{
                console.log(result.data)
                setFoodList(result.data);
        })

    }, []);
    useEffect(() => {
        console.log("Change")

    }, [content]);

    return (
        <div>
            <button onClick={() => {
                setContent(content + 1)
            }}>Click</button>
            <h1>
                {
                    foodlist && foodlist.map(food=>{
                        return(
                            <p>
                                {food.name}
                            </p>
                        )
                    })
                }
                {content}
            </h1>
        </div>
    )
}