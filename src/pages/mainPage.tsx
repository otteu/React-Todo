import { NavLink } from "react-router";


function MainPage() {
    return ( 
        <div className=" text-3xl">
            <div>Main</div>
            <div className=" underline">
                <NavLink to={'/about'}>
                    About
                </NavLink>
            </div>
        </div>
    );
}

export default MainPage;