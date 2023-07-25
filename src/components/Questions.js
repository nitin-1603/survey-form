import React from 'react'


export default function Questions(props) {

    return (
        <div className='container my-3'>
            <form onSubmit={props.submit}>
                <h3>What are you currently doing ?</h3>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q1" value='Teacher' id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1"> Teacher </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q1" value='Student' id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Student </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q1" value='Programmer' id="flexRadioDefault3" />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">Programmer </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q1" value='Other' id="flexRadioDefault4" />
                    <label className="form-check-label" htmlFor="flexRadioDefault4">Other </label>
                </div>

                {/* /////////////////////////////////////////////////// */}


                <h3>Please rate us our course. </h3>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2" value='Poor' id="flexRadioDefault5" />
                    <label className="form-check-label" htmlFor="flexRadioDefault5">Poor </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2" value='Good' id="flexRadioDefault6" />
                    <label className="form-check-label" htmlFor="flexRadioDefault6">Good</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2" value='Excellent' id="flexRadioDefault7" />
                    <label className="form-check-label" htmlFor="flexRadioDefault7">Excellent </label>
                </div>
                <h3>Enter your Comment Here.</h3>
                <div className="form-check">
                    <textarea name='textarea' id='textarea' placeholder='enter here...'></textarea>
                </div>

                <button type="submit"  className="btn btn-primary my-3">Save</button>
            </form>
            
        </div>
    )
}
