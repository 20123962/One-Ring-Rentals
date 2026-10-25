import React from "react";

// DefaultSideBar component
const DefaultSideBar = () => (
<div className="defaultsidebar">
					<div className="sidebar gray col-sm-4">
						<h2 className="section-title">In this section</h2>
						<ul className="categories subnav">
							<li><a href="#">Company</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Contact Us</a></li>
							<li><a href="#">Terms of Use</a></li>
							<li><a href="#">Privacy Policy</a></li>
						</ul>
					</div>
</div>
);

// exports the component so it can be imported
export default DefaultSideBar;