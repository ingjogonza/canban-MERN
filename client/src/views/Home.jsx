import React from 'react'
import ProjectList from './ProjectList'


const Home = () => {
    const projectStatus = ["Backlog", "InProgress", "Completed"];
    return (
        <div className="container">
            <h1 className="text-center">Project Manager</h1>
            <div className="row">
                <div className="col border-2">
                    <h3 className="bg-info text-center p-3">Backlog</h3>
                    <ProjectList status={projectStatus[0]}/>
                </div>
                <div className="col border-2">
                    <h3 className="bg-warning text-center p-3">In Progress</h3>
                    <ProjectList status={projectStatus[1]}/>
                </div>
                <div className="col border-2">
                    <h3 className="bg-success text-center p-3">Completed</h3>
                    <ProjectList status={projectStatus[2]}/>
                </div>
            </div>
            <div className="rowrow row-cols-4">
                <div className="col">
                    <button type="button" className="btn btn-primary">Add project</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
