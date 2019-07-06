import React from 'react'

    const card = ({ details }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {details.map((contact) => (
            <div class="card">
              <div class="card-body">
                      <h5 class="card-title">{contact.slot1}</h5>
                 
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default card