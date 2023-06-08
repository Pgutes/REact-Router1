import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
    return <div className="text-center">
                <h1 className="pt-5">Contact</h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>;
}

export default Contact;