// import Developers from "@/components/Landing_Page_partials/Developers";
// import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
// import Header from "@/components/Landing_Page_partials/Header";
// import HeroHome from "@/components/Landing_Page_partials/HeroHome";
// import LandingPageDevelopers from "@/utils/landing_page_developers";
// import React from "react";
// import { useEffect } from "react";

// const [feature1, feature2, feature3, dev1, dev2, dev3, pm1] = LandingPageDevelopers;

// function LandingPage() {

    
//     const fetchAllEvents = async () => {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
//         );
//         if (!response.ok) {
//             throw new Error(`${response.status} ${response.statusText}`);
//         }
//     };

//     useEffect(() => {
//         fetchAllEvents();
//     }, []);

//     return (
//         <div className="overflow-x-hidden">
//             <div className="flex flex-col min-h-screen overflow-x-hidden ">
//                 <Header className="overflow-x-hidden" />

//                 <main className="grow">
//                     <HeroHome />
//                     <FeaturesZigZag images={[feature1, feature2, feature3]} />
//                     <Developers images={[dev1, dev2, dev3, pm1]} />
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default LandingPage;


import Developers from "@/components/Landing_Page_partials/Developers";
import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
import Header from "@/components/Landing_Page_partials/Header";
import HeroHome from "@/components/Landing_Page_partials/HeroHome";
import LandingPageDevelopers from "@/utils/landing_page_developers";
import React from "react";

const [feature1, feature2, feature3, feature4, feature5,feature6] = LandingPageDevelopers;

function LandingPage() {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="grow">
                    <HeroHome />
                    <FeaturesZigZag images={[feature1, feature2, feature3, feature4, feature5, feature6]} />
                    {/* <Developers images={[dev1, dev2, dev3, pm1]} /> */}
                </main>
            </div>
        </div>
    );
}

export default LandingPage;

