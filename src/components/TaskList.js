import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const TaskList = ({ tasks }) => {
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemText id={task.id} primary={task.text}/>
                </ListItem>
            ))}
        </List>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.string
}

export default TaskList