import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  bottom : '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p:6,
};

export default function BasicModal(props) {

  // React.useEffect (()=>{
  //   console.log("Cok")
  // setTimeout(() => {
  //   setOpen(props.opened)
  //    console.log("Cok2")
  //    console.log(props.opened)

  // }, 8000);
  // },[])


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(props.opened)
  };
  const handleClose = () => {
    setOpen(props.closed)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.body}
          </Typography>
      <Button variant='contained' className='mt-3 mx-5  px-5' onClick={handleClose}>Close modal</Button>

        </Box>
      </Modal>
    </div>
  );
}
