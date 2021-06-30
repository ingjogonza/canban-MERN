import axios from 'axios';

export default class CanbanService {

    constructor() {}

    async getOneSingleProject(id) {
        try {
            console.log("id desde", id)
            const project = await axios.get(`http://localhost:8000/api/canban/byId/${id}`)
            //console.log(pet)
            return project.data.projectData;
        } catch(err) {
            return err;
        }
    };

    async getAllProjects(status) {
         try {
            const projectList = await axios.get('http://localhost:8000/api/canban/'+status);
            //console.log(petsList)
            return projectList.data.projects;

        } catch (error) {
            return error;
        }
    }

    async createPet(pet) {
        try {
            const newPet = await axios.post(`http://localhost:8000/api/pets/new`, pet)
            return newPet.data.pet;
        } catch(err) {
            return err;
        }
    }

    async updateProject(id, project) {
        try {
            const updatedProject = await axios.put(`http://localhost:8000/api/canban/update/${id}`, project)
            return updatedProject.data.project;
        } catch(err) {
            return err;
        }
    }

    async deleteProject(id) {
        try {
            const deletedProject = await axios.delete(`http://localhost:8000/api/canban/delete/${id}`)
            return deletedProject.data.deletedProject;
        } catch(err) {
            return err;
        }
    }



};