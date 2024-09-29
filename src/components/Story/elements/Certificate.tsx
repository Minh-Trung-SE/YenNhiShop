import Container from "@src/components/Container";
import Image from "next/image";


const Certificate = () => {
    return (
        <Container className='py-20 flex justify-between gap-x-5 flex-wrap'>
            <div
                style={
                    {
                        width: 320,
                        height: 400
                    }
                }
                className="relative bg-app-spring rounded-3xl"
            >
                <Image
                    src="/static/images/certificate.jpg"
                    alt="/certificate"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="absolute h-full w-full top-5 left-5 rounded-3xl"
                />
            </div>
            <div
                style={
                    {
                        width: 320,
                        height: 400
                    }
                }
                className="relative bg-app-spring rounded-3xl"
            >
                <Image
                    src="/static/images/certificate-2.jpg"
                    alt="/certificate"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="absolute h-full w-full top-5 left-5 rounded-3xl"
                />
            </div>
            <div
                style={
                    {
                        width: 320,
                        height: 400
                    }
                }
                className="relative bg-app-spring rounded-3xl"
            >
                <Image
                    src="/static/images/certificate-3.jpg"
                    alt="/certificate"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="absolute h-full w-full top-5 left-5 rounded-3xl"
                />
            </div>
        </Container>
    );
};

export default Certificate;