import React from "react";

interface HeaderProps {
    projectName: string
}
const Header: React.FC<HeaderProps> = ({projectName}) => {
    return (
        <>
            <header className="container header">
                <h1 className="text-info p-3 px-0">{projectName}</h1>
            </header>
        </>
    );
};

export default Header;