import { useParams } from "react-router-dom"

const ProductDetail = () =>{
    const params=useParams()
    console.log(params)
    return <div>Product Details {params.id}</div>
}

export default ProductDetail