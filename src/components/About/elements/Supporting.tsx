const Supporting = () => {

    return (
        <div className="py-20 text-white space-y-10">
            <h2 className="text-2xl font-medium">VIMB Supporting Vanuatu Globally</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                <div
                    className="p-5 bg-cover w-full"
                    style={
                        {
                            backgroundImage: "url(/images/supporting-1.jpg)"
                        }
                    }
                >

                    <h3 className="mt-40 font-medium">{"Vanuatu's 2030 Sustainable Development Vision"}</h3>
                </div>

                <div
                    className="p-5 bg-cover w-full"
                    style={
                        {
                            backgroundImage: "url(/images/supporting-2.jpg)"
                        }
                    }
                >

                    <h3 className="mt-40 font-medium">Commonwealth Trade and Investment Summit</h3>
                </div>
                <div
                    className="p-5 bg-cover w-full"
                    style={
                        {
                            backgroundImage: "url(/images/supporting-3.jpeg)"
                        }
                    }
                >

                    <h3 className="mt-40 font-medium">Commonwealth Trade and Investment Summit</h3>

                </div>
                <div
                    className="p-5 bg-cover w-full"
                    style={
                        {
                            backgroundImage: "url(/images/supporting-4.jpeg)"
                        }
                    }
                >

                    <h3 className="mt-40 font-medium">Coffee Production on the World of Coffee Expo held in Dubai</h3>

                </div>

            </div>


        </div>
    );
};

export default Supporting;