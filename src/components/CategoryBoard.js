import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import TaskList from './TaskList'
import AddTask from './AddTask'

const useStyles = makeStyles(() => ({
    boardBox: {
        display: 'flex',
        flexDirection: 'column',
        height: 550,
        width: 400,
        border: "2px solid black",
    },
    headerBox: {
        flex: 1,
        height: 100,
        backgroundColor: '#83d6f2',
        borderBottom: "2px solid black",
        fontSize: 32,
        textAlign: 'center'
    },
    bodyBox: {
        flex: 8,
        padding: 10,
        height: 400,
        backgroundColor: '#f6f6f9'
    },
    addBox: {
        flex: 1,
        textAlign: 'center',
        height: 50,
        backgroundColor: '#f6f6f9'
    }
}))

function CategoryBoard({ categoryTitle, taskArray, addTask }) {

    const classes = useStyles()

    return (
        <div className={classes.boardBox}>
            <Typography className={classes.headerBox}>
                {categoryTitle}
            </Typography> 
            <div className={classes.bodyBox}>
                <TaskList taskArray={taskArray}/>
            </div>
            <div className={classes.addBox}>
                <AddTask onAdd={addTask}/>
            </div>
        </div>
    )
}

CategoryBoard.propTypes = {
    categoryTitle: PropTypes.string,
    taskArray: PropTypes.array,
    addTask: PropTypes.func
}

export default CategoryBoard