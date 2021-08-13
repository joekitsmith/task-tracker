import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"

const useStyles = makeStyles(() => ({
    list:{
        maxHeight: '100%',
        overflow: 'auto',
        marginLeft: 15,
        marginTop: 10
    },
    task:{
        marginBottom:5
    }
}))

const TaskList = () => {

    const classes = useStyles()

    const dispatch = useDispatch()
    const { checkTaskAsCompleted } = bindActionCreators(actionCreators, dispatch)

    const handleChange = (val) => {
        checkTaskAsCompleted(val.target.name)
    }

    const taskList = useSelector((taskList) => taskList.tasks)

    if (!taskList || !taskList.length) {
        return <div>No tasks</div>
    }
    return (
        <FormGroup className={classes.list}>
            {taskList.map((task) => (
                <FormControlLabel 
                    key={task.id} 
                    data-testid='task'
                    className = {classes.task}
                    control={<Checkbox checked={task.completed} onChange={handleChange} name={task.id.toString()} color="primary"/>}
                    label={task.text}
                />
            ))}
        </FormGroup>
    )
}

export default TaskList