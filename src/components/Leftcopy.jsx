import React from "react";
import { connect } from "react-redux";

function LeftSidebar(props) {
	const { user } = props;

	return (
		<div className="flex flex-col items-center w-full bg-gray-100 p-4">
			{/* Profile Overview */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4 overflow-hidden">
				<h2 className="text-xl font-semibold mb-2">Profile Overview</h2>
				<div className="flex items-center mb-4">
					<img src={user.photoURL || "/images/default-avatar.png"} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
					<div>
						<p className="text-sm font-semibold">{user.displayName}</p>
						<p className="text-gray-600 text-xs">{user.major}, {user.yearOfStudy}</p>
					</div>
				</div>
				<p className="text-gray-700 mb-2">Interests: {user.interests ? user.interests.join(", ") : ""}</p>
				<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
					Edit Profile
				</button>
			</div>

			{/* Explore Clubs */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Explore Clubs</h2>
				{/* Club cards or list */}
				<p>Club cards or list go here...</p>
			</div>

			{/* Recommended Projects */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Recommended Projects</h2>
				{/* Project cards or list */}
				<p>Project cards or list go here...</p>
			</div>

			{/* Upcoming Events */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
				{/* Event cards or list */}
				<p>Event cards or list go here...</p>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(LeftSidebar);