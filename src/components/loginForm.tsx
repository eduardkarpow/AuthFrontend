import React, {useState} from 'react';
import { useContext } from 'react/cjs/react.production.min';
import { Context } from '../index';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const {store} = useContext(Context);
    return (
        <div>
            <input 
                type="text" 
                placeholder='Email' 
                onChange={e => setEmail(e.target.value)} 
                value = {email}
            />
            <input 
                type="text" 
                placeholder='Password' 
                onChange={e => setpassword(e.target.value)} 
                value = {password}
            />
            <button onClick={() => store.login(email, password)}>LogIN</button>
            <button onClick={() => store.registration(email, password)}>Registration</button>
        </div>
    );
}

export default LoginForm;