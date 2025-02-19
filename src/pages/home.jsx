import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl h-screen">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-2xl font-bold sm:text-5xl">
                        Create Your Own Meme!
                           
                        </h2>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium  bg-orange-700 rounded-lg hover:opacity-75"
                            to="/memepage"
                        >
                            Start Creating
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-3/6" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.quindorian.org%2Fwp-content%2Fuploads%2F2016%2F09%2FAngry-Meme-021.jpg&f=1&nofb=1&ipt=45ec43bd2ceb0892848ad78d84cf67385b865c7d99d086b0407f5feadc0d324b&ipo=images" alt="image1" />
                </div>
            </aside>

            <h5 className="text-center text-1xl sm:text-2xl py-10 font-medium">When you finally understand the joke, but it’s too late.</h5>
        </div>
    );
}
