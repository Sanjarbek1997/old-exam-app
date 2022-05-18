import '../Posts/post.css';

const Comments = ({obj}) => {

const {name,email,body} = obj

	return (
		<li className='comment-item'>
			<h3 className='comment-name m-10'>{name}</h3>
			<p className='comment-body'>
				{body}
			</p>
			<a className='comment-email' href={`mailto:${email}`}>
				<span className='comment-link-title'>
					<i className='fas fa-at'></i>
				</span>
				<span className='comment-email-span'>{email}</span>
			</a>
		</li>
	);
};

export default Comments;
