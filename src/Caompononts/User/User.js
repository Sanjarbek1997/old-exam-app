import './user.css';

const User = ({ obj,getPosts }) => {
	const { address, company, id, username, name, email, phone, website } = obj;
	return (
		<li onClick={getPosts} data-user-id={id} className='user-item'>
			<p data-user-id={id} className='id'>
				{id}
			</p>
			<h2 className='username'>{username}</h2>
			<h2 className='name'>{name}</h2>
			<div className='address'>
				<span className='address-title'>Adress:</span>
				<span className='street'>{address.street} </span>
				<span className='suite'>{address.suite}</span>
				<span className='city'>{address.city}</span>
				<span className='zipcode'>{address.zipcode}</span>
			</div>

			<div className='company'>
				<span className='company-title'>Company:</span>
				<span className='company__name'>{company.name}</span> <br />
				<span className='company-title'>Phrase:</span>
				<span className='catchPhrase'>{company.catchPhrase}</span>
				<br />
				<span className='company-title'> Bs: </span>
				<span className='bs'>{company.bs}</span>
			</div>
			<div className='links'>
				<a className='email' href={`mailto:${email}`}>
					<span className='email-span'>{email}</span>
				</a>
				<a
					className='link'
					target='__blank'
					href={`https://www.google.com/maps/place/${address.geo.lat},${address.geo.lng}`}>
					<span className='link-title'>
						<i className='fas fa-search-location'></i>
					</span>
					<span className='link-sapn'>Location </span>
				</a>
				<a className='tel' href={`tel:${phone.split(" ")[0]}`}>
					<span className='link-title'>
						<i className='fas fa-phone'></i>
					</span>
					<span className='tel-span'>{phone.split(" ")[0]}</span>
				</a>
				<a className='website' href={`http://${website}`}>
					<span className='link-title'></span>
					<i className='fas fa-globe'></i>
					<span className='website-span'>{website}</span>
				</a>
			</div>
		</li>
	);
};

export default User;
