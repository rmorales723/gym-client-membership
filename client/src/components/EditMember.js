import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'



function EditMember() {
    const { id } = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [img_url, setImg_url] = useState('')
    
    useEffect(() => {
        upDateMember();
    }, [])
    function upDateMember() {
        fetch(`/members/${id}`)
        .then(res => res.json())
        .then(member => {
            setName(member.name)
            setNumber(member.number)
            setAddress(member.address)
            setImg_url(member.img_url)
        })

    }
    

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`/members/${id}`, {
            method: `PATCH`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                number: number,
                address: address,
                img_url: img_url
            }),
        })
        .then(res => {
            if (res.ok) {
              res.json().then(() => {
                history.push('/members')
              })
            
            }
          })
          
    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container"></div>
                <form onSubmit={handleOnSubmit} >
                {/* {errors ? <alert className="alert alert-danger text-center" role="alert">{errors && displayError()}</alert> : <alert></alert>} */}
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label>Number</label>
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}

                    />

                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}

                    />

                    <label>ImgUrl</label>
                    <input
                        type="text"
                        name="img_url"
                        value={img_url}
                        onChange={(event) => setImg_url(event.target.value)}

                    />

                    <button type="submit">Edit</button>
                </form>
            </div>
        </div>
    )
}


export default EditMember;