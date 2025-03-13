import { useEffect, useState } from "react";
import { get } from "./util/http";
import type { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import BlogPosts from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchPosts() {
			setIsLoading(true);
			try {
				const data = (await get(
					"https://jsonplaceholder.typicode.com/posts",
				)) as RawDataBlogPost[];

				const blogPosts: BlogPost[] = data.map((post) => ({
					...post,
					text: post.body,
				}));

				setFetchedPosts(blogPosts);
			} catch (error) {
				if (error instanceof Error) {
					return setError(error.message);
				}
				setError("Failed to fetch data.");
			}
			setIsLoading(false);
		}
		fetchPosts();
	}, []);

	return (
		<main>
			<img
				src={fetchingImg}
				alt="An abstract depiction of data fetching process."
			/>
			{error && <ErrorMessage text={error} />}
			{isLoading && !fetchedPosts && (
				<p id="loading-fallback">Fetching posts...</p>
			)}
			{fetchedPosts && <BlogPosts posts={fetchedPosts} />}
		</main>
	);
}

export default App;
