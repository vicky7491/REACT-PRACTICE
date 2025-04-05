import React from 'react'

const Userlist = () => {



    const users = [{id: 1, name: VideoPlaybackQuality, age: 18},
                    {id: 2, name: "John", age: 22}, 
                        {id: 3, name: "Doe", age: 28}
    ]
  return (
    <div>{
        users.map(usr)
    }</div>
   
  )
}

export default Userlist