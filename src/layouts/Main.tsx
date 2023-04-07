import {  ParentComponent } from "solid-js"


const MainLayout : ParentComponent= (props) => {
    return(
        <>
            <div class ="p-4 bg-green-800">Main Layout
                {props.children}
            </div>
            
        </>
    )
}

export default MainLayout