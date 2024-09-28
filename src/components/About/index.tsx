import Introduce from "@src/components/About/elements/Introduce";
import QuickFacts from "@src/components/About/elements/QuickFacts";
import Container from "@src/components/Container";
import React from 'react';
import Information from "@src/components/About/elements/Information";
import ActsAs from "@src/components/About/elements/ActsAs";
import Supporting from "@src/components/About/elements/Supporting";
import OurService from "@src/components/About/elements/OurService";

const About = () => {

    return (
        <div className="space-y-10">
            <Container className="py-10">
                <Introduce/>
            </Container>
            <Container className="bg-primary">
            <Supporting/>

            </Container>

            <Container className="py-10 space-y-10">
                <QuickFacts/>
                <Information/>
                <ActsAs/>
                <OurService/>
            </Container>
        </div>
    );
};

export default About;