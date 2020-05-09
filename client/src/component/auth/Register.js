import React , {useState} from 'react'
import { connect } from 'react-redux';
import { register } from '../../store/actions/AuthActions';
import { Redirect } from 'react-router-dom';
const Register = ( { Register , isAuthenticated } ) => {
    const [form, setform] = useState({
        name:"",
        email:"",
        password:""
    });
    const onChangeHandler = e => {
        setform({...form,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        Register(form);
    }
    if( isAuthenticated ) { 
        return <Redirect to="/" />
    }
    console.log(isAuthenticated);
    return (
        <div className="Login">
            <form onSubmit={submitHandler}>
                <label name="name">Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={onChangeHandler}/>
                <label name="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={onChangeHandler}/>
                <label name="email">Password</label>
                <input type="password" name="password" id="password" value={form.password} onChange={onChangeHandler}/>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}
const mapDispatch = dispatch => {
    return {
        Register:formData => dispatch(register(formData))
    }
}
const mapState = state => {
    return { 
        isAuthenticated:state.auth.isAuthenticated
    }
}
export default connect(mapState,mapDispatch)(Register);
