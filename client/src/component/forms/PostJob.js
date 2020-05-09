import React , { useState } from 'react'

const PostJob = ({ClearAllModelsAndPayloads}) => {
	const [form, setform] = useState({
		title:"",
		category:"",
		skills:"",
		price:"",
		time:"",
		des:""
	})
	const onChangeHandler = e => {
		console.log(e.target.name);
		console.log(e.target.value);
	}
    return (
        <div className="post-popup job_post active">
			<div className="post-project">
				<h3>Post a job</h3>
				<div className="post-project-fields">
					<form>
						<div className="row">
							<div className="col-lg-12">
								<input type="text" name="title" placeholder="Title" onChange={onChangeHandler} />
							</div>
							<div className="col-lg-12">
								<div className="inp-field">
									<select onChange={onChangeHandler} name="category">
										<option>Category</option>
										<option>Category 1</option>
										<option>Category 2</option>
										<option>Category 3</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<input type="text" name="skills" placeholder="Skills" onChange={onChangeHandler} />
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input type="text" name="price" placeholder="Price" onChange={onChangeHandler} />
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="inp-field">
									<select onChange={onChangeHandler} name="time">
										<option>Full Time</option>
										<option>Half time</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<textarea name="des" placeholder="Description" onChange={onChangeHandler}></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" value="post">Post</button></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<a href="#" title="" onClick={e => {e.preventDefault()}}><i 
					onClick={ClearAllModelsAndPayloads}
				className="la la-times-circle-o"></i></a>
			</div>
		</div>
    )
}

export default PostJob
