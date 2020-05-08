import React , {useState} from 'react'

const LogIn = () => {
    const [form, setform] = useState({
        email:"",
        password:""
    });
    const onChangeHandler = e => {
        setform({...form,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="Login">
            <form onSubmit={submitHandler}>
                <label name="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={onChangeHandler}/>
                <label name="email">Password</label>
                <input type="password" name="password" id="password" value={form.password} onChange={onChangeHandler}/>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default LogIn
