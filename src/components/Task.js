import { makeStyles } from "@material-ui/core"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"

const useStyles = makeStyles((taskInfo) => ({
    task:{
        marginBottom: 5,
        textDecoration: taskInfo => taskInfo.completed
            ? 'line-through': 'none'
    }
}))

const Task = (taskInfo) => {

    const classes = useStyles(taskInfo)

    const dispatch = useDispatch()
    const { checkTaskAsCompleted } = bindActionCreators(actionCreators, dispatch)

    const handleChange = (val) => {
        checkTaskAsCompleted(val.target.name)
    }

    return (
        <FormControlLabel
            key={taskInfo.id} 
            className = {classes.task}
            control={<Checkbox checked={taskInfo.completed} onChange={handleChange} name={taskInfo.id.toString()} color="primary"/>}
            label = {taskInfo.text}
        />
    )
}

export default Task