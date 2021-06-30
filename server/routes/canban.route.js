const CanbanController = require('../controllers/canban.controller');

module.exports = app => {
    app.get('/api/canban/:status', CanbanController.findAllProjects);
    app.get('/api/canban/byId/:id', CanbanController.getProjectByID);
     app.post('/api/canban/new', CanbanController.createNewProject);
     app.put("/api/canban/update/:id", CanbanController.updateExistingProject);
    app.delete("/api/canban/delete/:id", CanbanController.deleteExistingProject);
    

}