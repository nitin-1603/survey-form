import React from 'react'

export default function Details(props) {
    return (
        <div className='container my-3'>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name: </label>
                    <input type="Text" className="form-control" name='name'  id="exampleInputPassword1" required/>
                </div>
               
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />

                </div>
                <button type="submit"  className="btn btn-primary">Next</button>
            </form>
        </div>
    )
}
