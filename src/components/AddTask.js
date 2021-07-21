import React from 'react'
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from '@material-ui/core/DialogContent'
import TextField from "@material-ui/core/TextField"
import DialogActions from '@material-ui/core/DialogActions'

function AddTask({ onAdd }) {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState("")

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAdd = () => {
        onAdd(text)
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                Add task
            </Button>
            <form id='addTask' onSubmit={handleAdd} action="#">
                <Dialog open ={open} onClose={handleClose}>
                    <DialogTitle>
                        Add task
                    </DialogTitle>
                    <DialogContent>
                        <TextField 
                            style={{ margin:20 }}
                            onChange={(event)=>{setText(event.target.value)}}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button form='addTask' autoFocus type="submit">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    )
}

export default AddTask