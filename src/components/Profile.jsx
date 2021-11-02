import React from 'react'

const Profile = (props) => {
    const {data} = props;
    console.log("Props" , props);
    console.log("Data : " , data);
    return (
        <div>
              <p>{data}</p>
            
        </div>
    )
}

export default Profile
