import axios from "axios";
import { useLoaderData ,} from "react-router";
import type { LoaderFunctionArgs } from "react-router";

export async function loadProduct({params}: LoaderFunctionArgs) {
    const {pno} = params
    const res = await axios.get(`http://localhost:8080/api/products/${pno}`)
    return res.data
}

function ReadPage() {
    const product:ProductDTO = useLoaderData()
    console.log(product)
    return (
    <div className="w-full">
        <div>Product Read</div>
    </div>
    )
}
export default ReadPage