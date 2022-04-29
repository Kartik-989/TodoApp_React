import ToDo from "./ToDo"
import { List } from "@mui/material"
import {  Box} from "@mui/system"

export default   function ToDoList(props){
    function delTask(index){
        const task = props.todos.filter((e,i,a)=>{ return i!==index })
        props.settodo(task)
    }
    function changeStatus(index){
        const task = props.todos.map((e,i,a)=>{
           return  i===index ? {...e,status:!e.status} : e

        })

        props.settodo(task)
    }

    function editTask(index,val){
        
    //console.log(index,val)  
    const task = props.todos.map((e,i,a)=>{
    return  i===index ? {...e,text:val} : e

    })

    props.settodo(task)
        
        
    }
    return(
        <Box textAlign={"center"} marginLeft={"20%"} marginRight={"20%"} >
            <List sx={{ maxwidth: '60%',  bgcolor: 'rgb(208 , 217, 211)' , borderRadius:'8px' }}>
            {
                    props.todos.map((todo,index) =>{
                        return(<ToDo row={todo} index={index} del={delTask} status={changeStatus} edit={editTask}/>)
                    
                    })
                }
                
            </List>
        </Box>
        
    )
}