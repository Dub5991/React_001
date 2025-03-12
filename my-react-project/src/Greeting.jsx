import { useState } from 'react';
import { string }  from 'prop-types';
import styles from './Greeting.module.css';

const Greeting = (props) => { 
    const [name, setName] = useState(props.initialName);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setName(props.initialName);
    }
    

    return (
        <div>
            <p className={styles.greeting}>
                {isLoggedIn ? `Hello, ${name}! Welcome back!` : props.customMessage}
            </p>
            {isLoggedIn ? (
                <button onClick={handleLogoutClick}>Logout</button>
            ) : (
                <button onClick={handleLoginClick}>Log in</button>
            )}
        </div>
    )
    
}

Greeting.propTypes = {
    initialName: string,
    customMessage: string,
}

Greeting.defaultProps = {
    initialName: 'John Doe',
    customMessage: 'Welcome! Please log in.'
}


export default Greeting;
