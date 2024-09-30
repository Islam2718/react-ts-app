import React from "react";

const Menu = () => {
    return (
        <>
            <div className="container menu d-flex justify-content-end border border-info p-3 rounded">
                <a href="/" className=" btn btn-sm btn-info me-2">Home</a>
                <a href="/about" className=" btn btn-sm btn-default me-2">About</a>
                <a href="contact" className=" btn btn-sm btn-default me-2">Contact</a>
                <a href="login" className=" btn btn-sm btn-default me-2">Login</a>                
            </div>
        </>
    );
};

export default Menu;