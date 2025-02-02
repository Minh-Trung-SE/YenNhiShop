
import {Banner, Products, WhyUs, RecentActivity, VideoActivity} from "@src/components/Home";





const HomePage = () => {

    return (
        <main>
            <section id="banner">
                <Banner/>
            </section>
            <section>
                <Products/>
            </section>
            <section>
                <WhyUs/>
            </section>
            <section>
                <RecentActivity/>
            </section>
            <section>
                <VideoActivity/>
            </section>
        </main>
    );
}

export default HomePage
