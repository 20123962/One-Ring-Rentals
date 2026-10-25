import React from "react";

// imported components used for this component
import IndexFeatured from "./indexfeatured";
import IndexPopularRegions from "./indexpopularregions";
import IndexRecentArticles from "./indexrecentarticles";
import IndexLastMinuteDeals from "./indexlastminutedeals";
import IndexActivity from "./indexactivity";
import Regions from "../data/regions";
import Activity from "../data/activity";
import RecentArticles from "../data/recentarticles";
import LastMinuteDeals from "../data/lastminutedeals";
import Featured from "../data/featured";

// IndexContent component
const IndexContent = () => (
    <div id="indexcontent">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-8">

            <IndexFeatured Featured = {Featured}/>

            <IndexPopularRegions Regions = {Regions}/>

            <IndexRecentArticles RecentArticles = {RecentArticles}/>

          </div>
            <div className="sidebar col-sm-4">

            <IndexLastMinuteDeals LastMinuteDeals = {LastMinuteDeals}/>

            <IndexActivity Activity = {Activity}/>
            </div>
        </div>
      </div>
    </div>
</div>
);

// exports the component so it can be imported
export default IndexContent;