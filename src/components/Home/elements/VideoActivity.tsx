import Container from "@src/components/Container";
import Layer from "@src/components/Layer";
import Image from "next/image";


const VideoActivity = () => {
    return (
        <div className="py-20 bg-green-100">
            <Container className="pointer-events-none py-5 space-y-10">
                <h5 className="font-playfair font-semibold italic text-4xl text-center bg-clip-text bg-gradient-to-r from-app-green-900 via-app-green-500 to-app-green-600 text-transparent">
                    Video hoạt động
                </h5>
                <div className="h-96 bg-app-white-700">

                </div>
            </Container>
        </div>
    );
};

export default VideoActivity;