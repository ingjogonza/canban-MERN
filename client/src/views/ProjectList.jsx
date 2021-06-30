import React, { useEffect, useState } from 'react'
import CanbanService from '../services/canban.service';
import { format } from 'timeago.js';
import Swal from 'sweetalert2';
import { history, useHistory } from 'react-router-dom';
const ProjectList = (props) => {
    const { status } = props;
    let history = useHistory();
    const [projectList, setProjectList] = useState([]);
    const [project, setProject]= useState({});
    const [button, setButton] = useState('');
    const [captionButton, setCaptionButton]= useState('');
    const canbanService = new CanbanService;

    const getProjectListFromService = async ()=>{
        try {
            const List = await canbanService.getAllProjects(status)
            setProjectList(List);
        } catch (err) {
            return err;
        }

    }
    const getASingleProjectFromService = async (id) => {
        try {
            const singleProject = await canbanService.getOneSingleProject(id);
            setProject(singleProject);
        } catch (err) {
            return err;
        }

    }

    const handleButtons = ()=>{
        if(status==="Backlog"){
            setButton('btn btn-warning');
            setCaptionButton('Start Project');
        }else if(status==="InProgress"){
            setButton('btn btn-success');
            setCaptionButton('Move to Completed');
        }else if(status==="Completed"){
            setButton('btn btn-danger');
            setCaptionButton('Remove Project'); 
        }
    }

    const handleProjectStatus = async (project)=>{
        
        console.log(project._id);
        try {
            let newStatus = "";
            if(project.status==="Backlog"){
                newStatus="InProgress"
            }else if(project.status==="InProgress"){
                newStatus="Completed";
            }
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
              }).then((result) => {
                if (result.isConfirmed) {
                    const updatedStatus =  canbanService.updateProject(project._id, { ...project, status: newStatus })
                    if (updatedStatus){
                        Swal.fire(
                            'Moved!',
                            'Your project has been moved to '+ newStatus,
                            'success'
                        )
                        history.go(0);
                    }
                    
                }
              })

            
        } catch (err) {
            return err;
        }

    }
    const handleDelete = async (id)=>{
        try{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
              }).then((result) => {
                if (result.isConfirmed) {
                    const finished =  canbanService.deleteProject(id);
                    if (finished){
                        Swal.fire(
                            'Finished!',
                            'Your project has been finished ',
                            'success'
                        )
                        history.go(0);
                    }
                    
                }
              })
        }
        catch(err){
            return err;
        }

    }
    
    useEffect(() => {
        getProjectListFromService();
        handleButtons();
    }, [])

    return (
        <div className="container">
            <ul className="list-group">
                {projectList.length>0 && projectList.map((p)=>(
                    <div className="card mb-2" key={p._id} value={p._id}>
                        <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <h6 className="card-text">{format(p.due_date)}</h6>
                            <button className={button} onClick={p.status!=="Completed" ? ()=>handleProjectStatus(p) : ()=>handleDelete(p._id)} >
                                {captionButton}
                            </button>
                        </div>

                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ProjectList
