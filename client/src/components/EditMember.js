import React from 'react'

const editMember = () => {
    fetch(`/member/:id`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: member.name,
        number: member.number,
        address: member.address
      }),
    })
      .then((res) => res.json())
      .then((result) => setMember(result))
      .catch((err) => console.log('error: ', err))
      
  }

  return (        
    <form onSubmit={handleSubmit} >
      <label>Name</label>
      <input 
        type="text"
        name="name"
        defaultValue={name}
        onChange={handleInputChange} 
      />

      <label>Number</label>
      <input 
        type="text" 
        name="number" 
        defaultValue={price}
        onChange={handleInputChange}
      />
    
      <label>Address</label>
      <input 
        type="text" 
        name="address" 
        defaultValue={price}
        onChange={handleInputChange}
      />

      <button type="submit">Update</button>
      <button>
        Cancel
      </button>
    </form>
  )
}


export default editMember