import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import Task from "./Task"

const useStyles = makeStyles(() => ({
    list:{
        maxHeight: '100%',
        overflow: 'auto',
        marginLeft: 15,
        marginTop: 10
    }
}))

const TaskList = () => {

    const classes = useStyles()

    const taskList = useSelector((taskList) => taskList.tasks)

    if (!taskList || !taskList.length) {
        return <div>No tasks</div>
    }
    return (
        <FormGroup className={classes.list}>
            {taskList.map((task) => (
                <Task {...task}/>
            ))}
        </FormGroup>
    )
}

export default TaskList