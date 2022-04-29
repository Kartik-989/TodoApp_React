
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { TextField } from '@mui/material';

export default function ToDo( props ){
  const [val,setVal] = useState(props.row.text)
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function editTask(){
    setOpen(false)
    props.edit(props.index,val)
  }

  //  console.log(props)
    return(
        <ListItem key={props.index}>
            <ListItemIcon onClick={()=>props.status(props.index)}>
                <Checkbox
                  edge="start"
                  checked={props.row.status}
                  
                />
              </ListItemIcon>
              <ListItemText id={props.index} primary={props.row.text} />
              <IconButton  aria-label="edit" onClick={handleOpen }>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={()=>props.del(props.index)}>
                <DeleteIcon />
              </IconButton>
              <Modal
                  hideBackdrop
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box sx={{ ...style, width: 200 }}>
                  <TextField id="task" label="Edit Task" variant="outlined"  value ={val} onChange={e=> setVal(e.target.value)} />
                  <Button onClick={editTask}>Submit</Button>
                  </Box>
                </Modal>
        </ListItem>
        
        
    )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid rgb(224, 240, 211)',
  borderRadius :'10px',
  boxShadow: '2px 2px 10px rgb(100,130,100)',
  pt: 5,
  px: 8 ,
  pb: 3,
};
