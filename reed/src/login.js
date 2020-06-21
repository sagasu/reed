import React from 'react';

export default () => {
    return (
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Login</h2>
            <form style={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button type="submit">submit</button>
            </form>

        </div>
        
    );
};
