import React from 'react'
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from '@material-ui/core/DialogContent'
import TextField from "@material-ui/core/TextField"
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"

const useStyles = makeStyles({
    text: {
        margin: 15
    },
})

function AddTaskDialog({ open, setOpen }) {

    const classes = useStyles()

    const dispatch = useDispatch()
    const { addTaskToList } = bindActionCreators(actionCreators, dispatch)

    const [text, setText] = React.useState("")

    const handleClose = () => {
        setOpen(false)
    }

    const handleAdd = () => {
        addTaskToList(text)
        setOpen(false)
        setText("")
    }

    return(
        <div>
            <Dialog open ={open} onClose={handleClose}>
                <DialogTitle>
                    Add task
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        className={classes.text}
                        onChange={(event)=>{setText(event.target.value)}}
                        />
                </DialogContent>
                <DialogActions>
                    <Button disabled={!(text.length&&text.trim().length)} onClick={handleAdd}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTaskDialog