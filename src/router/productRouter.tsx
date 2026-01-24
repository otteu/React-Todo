import { lazy, Suspense } from "react"
import { Navigate } from "react-router"

const ProductsIndex = lazy(() => import("../pages/product/indexPage"))
const ProductsList = lazy(() => import("../pages/product/listPage"))
const ProductsAdd = lazy(() => import("../pages/product/addPage"))
const Loading = () => <div>Products Loading....</div>


export default function productsRouter() {
    return (
        {
            path: "product",
            Component: ProductsIndex,
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading/>}><ProductsList/></Suspense>
                },
                {
                    path: "add",
                    element: <Suspense fallback={<Loading/>}><ProductsAdd/></Suspense>},
                {
                    path: "",
                    element: <Navigate to={'/product/list'}></Navigate>
                }
            ]
        }
    )
}