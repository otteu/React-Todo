import BasicMenu from "../../components/menus/basicMenu"

function LogoutPage () {
    return (
        <div className='fixed top-0 left-0 z-[1055] flex flex-col h-full w-full'>
            <BasicMenu/>
        <div className="w-full flex flex-wrap h-full justify-center items-center border2">
            <div> 로그아웃 </div>
        </div>
        </div>
    )
}
export default LogoutPage