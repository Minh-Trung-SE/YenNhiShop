import Main from "@src/components/Footer/elements/Main";
import Layer from "@src/components/Layer";
import React from 'react';


const Footer = () => {
    return (
        <footer>
            <Main/>
            <Layer style={{right: "60%", bottom: "15%"}}/>
            <Layer style={{left: "60%", top: "15%"}}/>
        </footer>
    );
};

export default Footer;