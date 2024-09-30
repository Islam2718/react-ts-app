import React from "react";

const Menu = () => {
    const linkUrl = window.location.pathname;
    return (
        <>
            <div className="container menu d-flex justify-content-end border border-info p-3 rounded">
                <a href="/"
                    className={`btn btn-sm me-2 ${linkUrl === '/' ? 'btn-info' : 'btn-default'}`}
                >Home</a>
                
                <a href="/about"
                    className={`btn btn-sm me-2 ${linkUrl === '/about' ? 'btn-info' : 'btn-default'}`}
                >About</a>
                <a href="contact"
                    className={`btn btn-sm me-2 ${linkUrl === '/contact' ? 'btn-info' : 'btn-default'}`}
                >Contact</a>
                <a href="login" 
                    className={`btn btn-sm me-2 ${linkUrl === '/login' ? 'btn-info' : 'btn-default'}`}
                >Login</a>
            </div>
        </>
    );
};

export default Menu;