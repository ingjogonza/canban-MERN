const Canban = require('../models/canban.model');

module.exports.findAllProjects = (req, res) => {
    Canban.find({status: req.params.status}).sort({due_date: -1})
    .then(allProjects => res.json({projects: allProjects}))
    .catch(err => res.json({errors: err}));
}

module.exports.createNewProject = (req, res) => {

    // console.log('llegue aqui',req.body);
    Canban.create(req.body)
    .then(newCanban => res.send({canban: newCanban}))
    .catch(err => res.send({errors: err}));
}

module.exports.getProjectByID = (req, res) => {
    console.log("id controller ",req.params.id);
    Canban.findById(req.params.id)
    .then(singleProject => res.json({projectData: singleProject}))
    .catch(error => res.json({singleProject: null}));
}

module.exports.updateExistingProject = (req, res) => {
    Canban.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateProject => res.json({ project: updateProject }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingProject = (req, res) => {
    Canban.findByIdAndDelete({ _id: req.params.id })
        .then(deleteProject => res.json({ projectDeleted: deleteProject }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
