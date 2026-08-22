import React from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        age: '',
        city: ''
    });
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <h1>controlled Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />   
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form> 
    </div>
  )
}

export default Form
