import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const TaskList = ({ task_array }) => {
    if (!task_array || !task_array.length) {
        return <div>"No tasks"</div>
    }
    return (
        <List>
            {task_array.map((task, id) => (
                <ListItem key={id}>
                    <ListItemText id={id} primary={task.text} data-testid='task'/>
                </ListItem>
            ))}
        </List>
    )
};

TaskList.propTypes = {
    tasks: PropTypes.array
}

export default TaskList