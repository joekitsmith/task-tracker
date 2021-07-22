import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from '@material-ui/core/DialogContent'
import TextField from "@material-ui/core/TextField"
import DialogActions from '@material-ui/core/DialogActions'

const useStyles = makeStyles({
    text: {
        margin: 15
    },
})

function AddTask({ onAdd }) {

    const classes = useStyles()

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
            <Button onClick={handleOpen} data-testid='dialogButton'>
                Add task
            </Button>
            <Dialog open ={open} onClose={handleClose} data-testid='dialog'>
                <DialogTitle>
                    Add task
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        className={classes.text}
                        onChange={(event)=>{setText(event.target.value)}}
                        data-testid='newTask'
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd} data-testid='addButton'>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTask