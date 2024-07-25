
import "assets/css/components/hiddenSidebar.css"

export const HiddenSidebar=({children,isOpen,onClose=()=>{}})=>{

    return<div className=" hidden-sidebar ">
        {isOpen&&<div className="bg " onClick={onClose}></div>}
        <div className={" cont "+(isOpen&&" open ")} >
            {children}
        </div>
    </div> 
}


export const Header=({children})=>{
    return <div className="header" >
        {children}
    </div> 
}