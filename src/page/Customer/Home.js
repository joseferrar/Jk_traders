import React, { useEffect } from 'react'
import Carousel from '../../components/Carousel'
import AnalysisBanner from '../../components/AnalysisBanner'
import { useNavigate } from 'react-router-dom';
import AboutUs from '../../components/AboutUs';
import OurServices from './OurServices';
import TeamList from '../../components/TeamList';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        // Disable the back button
        const handleBackButton = (e) => {
            e.preventDefault();
            navigate(1); // Prevent going back
        };

        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]);

    return (
        <div>
            <Carousel />
            <AnalysisBanner />
            <AboutUs />
            <OurServices />
            <TeamList />
        </div>
    )
}

export default Home