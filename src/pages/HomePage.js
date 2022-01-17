import React, { Fragment, useEffect } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import DummySelectBox from '../components/common/responsiveAndOtherComponents/DummySelectBox'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import ResponsiveSearch from '../components/common/responsiveAndOtherComponents/ResponsiveSearch'
import BannerImageViewMore from '../components/homeComponents/BannerImageViewMore'
import BannerLayer from '../components/homeComponents/BannerLayer'
import BooksAudible from '../components/homeComponents/BooksAudible'
import BrandSlider from '../components/homeComponents/BrandSlider'
import BeautyHealths from '../components/homeComponents/BeautyHealths'
import ContinueLink from '../components/homeComponents/ContinueLink'
import MainSlider from '../components/homeComponents/MainSlider'
import MenClothing from '../components/homeComponents/MenClothing'
import MenClothingTimingSection from '../components/homeComponents/MenClothingTimingSection'
import MobilesTablets from '../components/homeComponents/MobilesTablets'
import SitePriorities from '../components/homeComponents/SitePriorities'
import ToysHobbiesRobots from '../components/homeComponents/ToysHobbiesRobots'
import WomenClothing from '../components/homeComponents/WomenClothing'

function HomePage() {

    useEffect(()=>{
        window.scroll(0,0)
    })

    return (
        <Fragment>
            {/* app */}
     <div id="app">

        {/* Header */}
        <Header allCategoryMenu='true'/>
        {/* Header /- */}

        {/* Main-Slider */}
        <MainSlider/>
        {/* Main-Slider /- */}

        {/* Banner-Layer */}
        <BannerLayer/>
        {/* Banner-Layer /- */}

        {/* Men-Clothing */}
        <MenClothing/>

        {/* Men-Clothing-Timing-Section / HOT DEALS */}
        <MenClothingTimingSection/>
        {/* Men-Clothing-Timing-Section / HOT DEALS - */}

        {/* Banner-Image & View-more */}
        <BannerImageViewMore/>
        {/* Banner-Image & View-more /- */}
        {/* Men-Clothing /- */}

        {/* Women-Clothing */}
        <WomenClothing/>
        {/* Women-Clothing /- */}

        {/* Toys-Hobbies-&-Robots */}
        <ToysHobbiesRobots/>
        {/* Toys-Hobbies-&-Robots /- */}

        {/* Mobiles-&-Tablets */}
        <MobilesTablets/>
        {/* Mobiles-&-Tablets /- */}

        {/* Consumer-Electronics */}
        <BeautyHealths/>
        {/* Consumer-Electronics /- */}

        {/* Books-&-Audible */}
        <BooksAudible/>
        {/* Books-&-Audible /- */}


        {/* Brand-Slider */}
        <BrandSlider/>
        {/* Brand-Slider /- */}

        {/* Site-Priorities */}
        <SitePriorities/>
        {/* Site-Priorities /- */}

        {/* Footer */}
        <Footer/>
        {/* Footer /- */}




        {/*/!* Newsletter-Modal *!/*/}
        {/*<NewsLetterModal/>*/}
        {/*/!* Newsletter-Modal /- *!/*/}

        {/*/!* Quick-view-Modal *!/*/}
        <QuickViewModal/>
        {/*/!* Quick-view-Modal /- *!/*/}
      </div>
      {/* app /- */}
        </Fragment>
    )
}

export default HomePage
