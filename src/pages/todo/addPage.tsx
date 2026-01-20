import AddComponent from "../../components/todo/addComponent"



function AddPage()
{
    return(
        <div className="bg-white w-full">
            <div className="text-4xl">
                Todo Add Page 
                <AddComponent />
            </div>
        </div>
    )
}

export default AddPage