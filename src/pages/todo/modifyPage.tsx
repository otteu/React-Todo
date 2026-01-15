import { useParams } from "react-router"



function ModifyPage()
{
    const { tno } = useParams()

    return (
        <div className="bg-white w-full">
            <div className="text-4xl">
                Todo ModifyPage Page {tno} 
            </div>
        </div>
    )
}
// D:\Users\otteu\study_project\inflearn\react_spring\ch01\src\pages\todo\modifyPage.tsx
export default ModifyPage