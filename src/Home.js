import { useState } from "react";


const Home= () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(45)

    const handleClick = () => {
        setName('Anthony')
        setAge(100)   
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;