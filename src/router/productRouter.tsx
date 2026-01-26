import { lazy, Suspense } from "react"
import { Navigate } from "react-router"
import { loadProducts } from "../pages/product/listPage"
import { loadProduct } from "../pages/product/readPage"

const ProductsIndex = lazy(() => import("../pages/product/indexPage"))
const ProductsList = lazy(() => import("../pages/product/listPage"))
const ProductsAdd = lazy(() => import("../pages/product/addPage"))
const ProductRead = lazy(() => import("../pages/product/readPage"))
const ProductModify = lazy(() => import("../pages/product/modifyPage"))

const Loading = () => <div>Products Loading....</div>


export default function productsRouter() {
    return (
        {
            path: "product",
            Component: ProductsIndex,
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading/>}><ProductsList/></Suspense>,
                    loader: loadProducts
                },
                {
                    path: "add",
                    element: <Suspense fallback={<Loading/>}><ProductsAdd/></Suspense>
                },
                {
                    path: "",
                    element: <Navigate to={'/product/list'}></Navigate>
                },
                {
                    path: "read/:pno",
                    element: <Suspense fallback={<Loading/>}><ProductRead/></Suspense>,
                    loader: loadProduct
                },
                {
                    path: "modify/:pno",
                    element: <Suspense fallback={<Loading/>}><ProductModify/></Suspense>,
                    loader: loadProduct
                }
            ]
        }
    )
}