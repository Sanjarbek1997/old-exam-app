import './post.css';

const Posts = ({ obj, getComments }) => {
	const { id, title, body } = obj;

	return (
		<li onClick={getComments} data-post-id={id} className='post-item'>
			<h3  data-post-id={id} className='title m-10'>
				{title}
			</h3>
			<p data-post-id={id} className='body'>
				{body}
			</p>
		</li>
	);
};

export default Posts;
