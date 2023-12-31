import { Link } from "react-router-dom";
import bannerBg from "../../../assets/BannerBackgrounds/bg6.jpg"

const Banner = () => {
    return (
        <div className="hero sm:min-h-[700px]" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Task Management</h1>
                    <p className="mb-5 text-sm lg:text-base">
                        A daily essential task management website where you can create and manage your work schedules and do many more things. Please sign up or sign in to explore dashboard.
                    </p>
                    <button className="my-5"><Link to="/login" className="bg-green-500 text-white py-2 px-4 lg:py-4 lg:px-8 rounded-lg hover:bg-white hover:border-green-500 hover:text-green-500 hover:transition duration-200">Let’s Explore</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;