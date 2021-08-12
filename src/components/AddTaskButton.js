import React from 'react'
import Button from "@material-ui/core/Button"

function AddTaskButton({ setOpen }) {

    const handleOpen = () => {
        setOpen(true)
    }

    return(
        <div>
            <Button onClick={handleOpen}>
                Add task
            </Button>
        </div>
    )
}

export default AddTaskButton