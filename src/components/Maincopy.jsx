import React from "react";
import { connect } from "react-redux";

function HomeFeed(props) {
	// Sample data for demonstration
	const personalizedFeed = [
		{
			type: "announcement",
			content: "New club announcement: Photography Club meeting on Friday!",
			imageUrl: "/images/sample_img.jpg",
		},
		{
			type: "update",
			content: "Project update: Our team just launched a new app!",
			imageUrl: "/images/sample_img.jpg",
		},
		{
			type: "event",
			content: "You're invited! Join us for a coding workshop next week.",
			imageUrl: "/images/sample_img.jpg",
		},
		{
			type: "post",
			content: "Excited to share my latest blog post about web development.",
			imageUrl: "/images/sample_img.jpg",
		},
	];

	// Sample data for demonstration
	const featuredContent = [
		{
			title: "Success Story: From College to CEO",
			imageUrl: "/images/sample_img.jpg",
		},
		{
			title: "5 Inspirational Articles for Students",
			imageUrl: "/images/sample_img.jpg",
		},
		{
			title: "Career Advice: Navigating Your First Job Interview",
			imageUrl: "/images/sample_img.jpg",
		},
	];

	return (
		<div className="flex flex-col items-center w-full">
			{/* Personalized Feed */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Personalized Feed</h2>
				{personalizedFeed.map((item, index) => (
					<div key={index} className="flex items-center border-b border-gray-200 py-2">
						<img src={item.imageUrl} alt="Feed Item" className="w-12 h-12 object-cover rounded-md mr-4" />
						<p>{item.content}</p>
					</div>
				))}
			</div>

			{/* Interactive Posts */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Interactive Posts</h2>
				{/* Placeholder text for interactive posts */}
				<p>No interactive posts available</p>
			</div>

			{/* Featured Content */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Featured Content</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{featuredContent.map((item, index) => (
						<div key={index} className="bg-gray-200 rounded-md overflow-hidden">
							<img src={item.imageUrl} alt="Featured Content" className="w-full h-48 object-cover" />
							<div className="p-4">
								<p className="font-semibold">{item.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Call-to-Action Buttons */}
			<div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
				<h2 className="text-xl font-semibold mb-2">Call-to-Action Buttons</h2>
				{/* Placeholder text for call-to-action buttons */}
				<p>No call-to-action buttons available</p>
			</div>
		</div>
	);
}

export default HomeFeed;