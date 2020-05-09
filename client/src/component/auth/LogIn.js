import React , {useState} from 'react'
import { connect } from 'react-redux';
import { login } from '../../store/actions/AuthActions';
import { Redirect } from 'react-router-dom';

const LogIn = ({Login , isAuthenticated}) => {
    const [form, setform] = useState({
        email:"",
        password:""
    });
    const onChangeHandler = e => {
        setform({...form,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        Login(form);
    }
    if ( isAuthenticated ) return <Redirect to="/" />
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

const mapState = state => {
    return { 
        isAuthenticated:state.auth.isAuthenticated
    }
}
const mapDispatch = dispatch => {
    return {
        Login:(formData) => dispatch(login(formData))
    }
}
export default connect(mapState,mapDispatch)(LogIn);
