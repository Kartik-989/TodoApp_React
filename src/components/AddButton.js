
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


export default function AddButton(props){
    const [val , setVal]  = useState()

    function  handleSubmit(event){
        event.preventDefault()
        if(val){
            let newTask = [...props.todos,{text:val,status:false}]
            props.addtodo(newTask)
            setVal("")
        }
    }

    return(
            <Box textAlign="center" margin={2}>
                <form onSubmit={handleSubmit}>
                <TextField id="task" label="New Task" variant="outlined"  value ={val} onChange={e=> setVal(e.target.value)} />
                
                    <Button  color="primary" aria-label="addTask" component="span" type='submit' >
                        <button type='submit'>
                        <AddIcon fontSize='large'/>
                        </button>
                    </Button>
                    
                </form>
            </Box>

    )
}
