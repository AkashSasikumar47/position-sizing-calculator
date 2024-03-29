import React from "react";
import { connect } from "react-redux";

function RightSidebar(props) {
	const { connections, recommendedConnections, recentActivity, trendingTopics } = props;

	return (
		<div className="flex flex-col items-center w-full bg-gray-100 p-4">
			{/* Connections and Recommendations */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Connections and Recommendations</h2>
				{/* List of connections and recommended connections */}
				<p>List of connections and recommended connections go here...</p>
			</div>

			{/* Recent Activity */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
				{/* List of recent activities */}
				<p>List of recent activities go here...</p>
			</div>

			{/* Trending Topics */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Trending Topics</h2>
				{/* List of trending topics */}
				<p>List of trending topics go here...</p>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		connections: state.connections,
		recommendedConnections: state.recommendedConnections,
		recentActivity: state.recentActivity,
		trendingTopics: state.trendingTopics,
	};
};

export default connect(mapStateToProps)(RightSidebar);