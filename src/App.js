import User from './Caompononts/User/User';
import { useEffect, useState } from 'react';
import Posts from './Caompononts/Posts/Posts';
import Comments from './Caompononts/Comments/Comments';

function App() {
	const [users, setUsers] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [posts, setPosts] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [comments, setComments] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [userId, setUserId] = useState(0);
	const [postId, setPostId] = useState(0);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) =>
				setUsers({
					isFetched: true,
					data: data,
					error: false,
				}),
			);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) =>
				setPosts({
					isFetched: true,
					data: data.filter((item) => item.userId === userId - 0),
					error: false,
				}),
			);
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((res) => res.json())
			.then((data) =>
				setComments({
					isFetched: true,
					data: data.filter((item) => item.postId === postId - 0),
					error: false,
				}),
			);
		// console.log(posts);
	}, [postId, userId]);

	const getPosts = (e) => {
		if (e.target.matches('.user-item')) {
			let num = e.target.dataset.userId;
			setUserId(num);
			setPostId(0)
			console.log(userId);
		}
		if (e.target.matches('.id')) {
			let num = e.target.dataset.userId;
			setUserId(num);
			setPostId(0)

		}
	};
	const getComments = (e) => {
		if (e.target.matches('.post-item')) {
			let num = e.target.dataset.postId;
			console.log(e);
			console.log(num);
			setPostId(num);
		}
		if (e.target.matches('.title')) {
			let num = e.target.dataset.postId;
			setPostId(num);
		}
		if (e.target.matches('.body')) {
			let num = e.target.dataset.postId;
			setPostId(num);
		}
	};

	return (
		<section>
			<ul className='user-list'>
				{users.isFetched &&
					users.data.map((item) => (
						<User key={item.id} obj={item} getPosts={getPosts} />
					))}
			</ul>
			<ul className='post-list'>
				{posts.isFetched &&
					posts.data.map((item) => (
						<Posts key={item.id} obj={item} getComments={getComments} />
					))}
			</ul>
			<ul className='comment-list'>
				{comments.isFetched &&
					comments.data.map((item) => <Comments key={item.id} obj={item} />)}
			</ul>
		</section>
	);
}

export default App;
