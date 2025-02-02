import Layer from "@src/components/Layer";
import {Introduction, Story, Contact, Certificate} from "@src/components/Story";


const HomePage = () => {

    return (
        <main>
            <section>
                <Introduction/>
                <Layer style={{right: "80%", bottom: "15%"}}/>
                <Layer style={{left: "80%", top: "10%"}}/>
            </section>
            <section>
                <Layer style={{left: "80%", top: "-15%"}}/>
                <Layer style={{right: "85%", top: "10%"}}/>
                <Layer style={{left: "85%", bottom: "10%"}}/>
                <Story/>
            </section>
            <section>
                <Certificate/>
            </section>
            <section>
                <Contact/>
            </section>
        </main>
    );
}

export default HomePage
