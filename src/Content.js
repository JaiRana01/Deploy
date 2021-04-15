import React, { Component } from "react";
import Games from "./data.json";
import './content.css';


const GameData = Games.map(

    (Games) =>
    (
        <div className="col-md-6" key={Games.id}>
            <div class="card flex-md-row mb-4 box-shadow h-md-250">


                <div className="card shadow-sm">
                    
                    <img src={Games.image} />
                    <div className="card-body">
                        <p className="card-text">{Games.description}</p>


                    </div>
                </div>
            </div>
        </div>
    )

);

class Content extends Component
{
    render()
    {
        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-sm-2 cols-md-3 g-3">
                        
                    {GameData}
                    </div>
                
                </div>
            </div>
           
        );
    }
}

export default Content;