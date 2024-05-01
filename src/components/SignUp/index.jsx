//import { useState } from "react";
import { useForm } from "react-hook-form";



const SignUp = ()=>{
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [adress, setAdress] = useState('')
    // const [zipcode, setZipcode] = useState('')
    // const [phone, setPhone] = useState('')

    const handleClearClick = ()=>{
        reset();
        // setName('');
        // setAge("");
        // setAdress("");
        // setZipcode("");
        // setPhone("");

    }
    const handleFormSubmit = (data)=>{
        console.log(data)
        // console.log ("submit:", {
        //     name,
        //     age,
        //     zipcode,
        //     phone,
        //     adress
        // })
    }


    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>
                Name
                <input {...register("name", {required:true})} required />
            </label>
            <br />
            <label>
                Age 
                <input {...register("age", {required:true})} required />
            </label>
            <br />
            <label>
                Adress 
                <input {...register("adress", {required:true})} required />
            </label>
            <br />
            <label>
                Zipcode 
                <input {...register("zipcode", {required:true})} required />
            </label>
            <br />
            <label>
                Phone 
                <input {...register("phone", {required:true})} required />
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


//para esto, instale la dependencia de react hook form -> npm install react-hook-form

//Lo demas que está comentado, es como hacer uso del form pero sin la dependencia
