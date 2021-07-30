import React from "react";


const List = ({people}) =>{
    
    

    return (
        <main >
            <div className = "birthday-counter">
                <h1>{people.length} birthdays today</h1>
            </div>
            <div className = "persons">
                {people.map((person) =>{
                    const {id,name,age,image } = person;
                    return(             
                        <div key = {id} className  = "person">
                            <div>
                                <img src={image}></img>
                            </div>
                            <div>
                                <h3>{name}</h3>
                                <p>{age} Years</p>
                            </div>
                        </div>
                    )
                })}
                
               
            </div>
        </main>
    )
}

export default List