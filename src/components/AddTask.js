import React from 'react'
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from '@material-ui/core/DialogContent'
import TextField from "@material-ui/core/TextField"

function AddTask() {

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Add task
            </Button>
            <Dialog open ={open} onClose={handleClose}>
                <DialogTitle>
                    Add task
                </DialogTitle>
                <DialogContent>
                    <TextField id="new_task" style={{ margin:20 }}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddTask