import { NavLink } from "react-router";


function AboutPage(){
    return(
        <div className=" text-3xl">
            <div>AboutPage</div>
            <div className=" underline">
                <NavLink to={'/'}>
                    Main
                </NavLink>
            </div>
            
        </div>
    )
}

export default AboutPage;