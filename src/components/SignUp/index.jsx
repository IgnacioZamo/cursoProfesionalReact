import { useState } from "react";



const SignUp = ()=>{
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [adress, setAdress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    const handleClearClick = ()=>{
        setName('');
        setAge("");
        setAdress("");
        setZipcode("");
        setPhone("");

    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log ("submit:", {
            name,
            age,
            zipcode,
            phone,
            adress
        })

    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Name
                <input value= {name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Age 
                <input value= {age} onChange={(e) => setAge(e.target.value)} required />
            </label>
            <br />
            <label>
                Adress 
                <input value= {adress} onChange={(e) => setAdress(e.target.value)} required />
            </label>
            <br />
            <label>
                Zipcode 
                <input value= {zipcode} onChange={(e) => setZipcode(e.target.value)} required />
            </label>
            <br />
            <label>
                Phone 
                <input value= {phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <div>
                <button onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>

        </form>

    )
        
};


export default SignUp