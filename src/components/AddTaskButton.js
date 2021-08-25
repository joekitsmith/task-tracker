import React from 'react'
import Button from "@material-ui/core/Button"

function AddTaskButton({ setOpen }) {

    const handleOpen = () => {
        setOpen(true)
    }

    return(
        <Button onClick={handleOpen}>
            Add task
        </Button>
    )
}

export default AddTaskButton