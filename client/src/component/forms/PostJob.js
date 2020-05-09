import React , { useState } from 'react'

const PostJob = ({ClearAllModelsAndPayloads , SavePost}) => {
	const [form, setform] = useState({
		title:"",
		pricefrom:0,
		priceto:0,
		description:"",
		skills:""
	})
	const { title, pricefrom , priceto , description ,skills } = form;
	const onChangeHandler = e => {
		setform({ ...form , [e.target.name]:e.target.value});
	}
	const onSumit = e => {
		e.preventDefault();
		const formData = {...form};
		const skills = formData.skills.split(",").map(skill => skill.trim());
		formData.skills = skills;
		SavePost(formData);
	}
    return (
        <div className="post-popup job_post active">
			<div className="post-project">
				<h3>Post a job</h3>
				<div className="post-project-fields">
					<form>
						<div className="row">
							<div className="col-lg-12">
								<input type="text" name="title" placeholder="Title" value={title} onChange={onChangeHandler} />
							</div>
							<div className="col-lg-12">
								<div className="inp-field">
									<select>
										<option>Category</option>
										<option>Category 1</option>
										<option>Category 2</option>
										<option>Category 3</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<input type="text" name="skills" placeholder="Skills" value={skills} onChange={onChangeHandler} />
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input type="number" name="pricefrom" value={pricefrom} placeholder="Price from" onChange={onChangeHandler} />
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input type="number" name="priceto" value={priceto} placeholder="Price to" onChange={onChangeHandler} />
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-12">
								<textarea name="description" placeholder="Description" value={description} onChange={onChangeHandler}></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" onClick={onSumit} value="post">Post</button></li>
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
