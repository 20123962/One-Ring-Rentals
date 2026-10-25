import React from "react";

// imported components used for this component
import DefaultMain from "./defaultmain";
import DefaultSideBar from "./defaultsidebar";

// DefaultContent component
const DefaultContent = () => (
<div className="defaultcontent">
		<div className="content">
			<div className="container">
				<div className="row">
                <DefaultMain />
                <DefaultSideBar />
				</div>
			</div>
		</div>
</div>
);

// exports the component so it can be imported
export default DefaultContent;