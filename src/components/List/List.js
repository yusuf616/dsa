import "assets/css/components/list.css"


export const List=({children,items=[]})=>{ //Unordered HTML List
    return <ul className=" list ">
        {items?.map((item,index)=><ListItem selected={item?.selected}  onClick={()=>item?.onClick?.()} key={index} >
            <ListIcon>
                {item?.icon}
            </ListIcon>
            <ListContent>
                {item?.content}
            </ListContent>
        </ListItem>)}
        {children}
    </ul>
}



export const ListItem=({children, onClick=()=>{},selected=false})=>{
    return <li  onClick={onClick} className={selected?" li-selected ":""} >
        <div className={" cont "} >
            {children}
        </div>
    </li>
}

export const ListIcon=({children})=>{
    return <div className=" icon ">
        {children}
    </div> 
};

export const ListContent=({children})=>{
    return <div className=" l-content ">
        {children}
    </div> 
};

