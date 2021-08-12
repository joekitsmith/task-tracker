import React from 'react'
import AddTaskButton from './AddTaskButton'
import AddTaskDialog from './AddTaskDialog'

function AddTask() {

    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <AddTaskButton setOpen={setOpen}/>
            <AddTaskDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default AddTask