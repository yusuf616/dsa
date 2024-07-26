
import "assets/css/components/img.css" 
import  {FaCameraRetro} from "react-icons/fa"

export const Img=({
    rounded="none",
    alt="",
    src="",
    style={},
    edit=true,
    hover=false
})=>{

    const styles={
        rounded:{
            "none":{
                borderRadius:0
            },
            "full":{
                borderRadius:"100%"
                
            }
        }
    }

    return <div 
        className={" my-img "+ (hover?" my-img-hover ":"")}  
        style={{
            ...style,
            ...styles["rounded"]?.[rounded]||{}
        }} 
    >
        <img className=" img " alt={alt} src={src} />
        {hover&&<div className=" hover ">
            {edit&&<FaCameraRetro className=" edit " size={25}/>} 
        </div>}
    </div> 
}