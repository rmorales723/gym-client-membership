// import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Member from './Member'

function EditMember() {
    const { id } = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [img_url, setImg_url] = useState('')



    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`/members/${id}`, {
            method: 'PATCH',
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
            .then((res) => {
                history.push('/members')
            })
    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container"></div>
                <form onSubmit={handleOnSubmit} >
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