const getAllTasks = (req, res) => {
    res.send('All Tasks');
}
const createTask = (req, res) => {
    res.send('Create a Task');
}
const getTask = (req, res) => {
    res.send('get a Task');
}
const deleteTask = (req, res) => {
    res.send('delete a Task');
}
const updateTask = (req, res) => {
    res.send('updated a Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask,
}
