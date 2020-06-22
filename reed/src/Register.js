import React,{useState} from 'react';

const initialFormState = {
    username: "",
    email: "",
    password: ""
};

export default function Register() {

    const [form, setForm] = useState(initialFormState);

    const [user, setUser] = useState(null);

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    }

    return (


        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Register</h2>
            <form style={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center'
            }}
            onSubmit={handleSubmit}
            >
                <input type="text" value={form.username} name="username" placeholder="Username" onChange={handleChange}/>
                <input type="email" value={form.email} name="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange}/>
                <button type="submit">submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    );
}