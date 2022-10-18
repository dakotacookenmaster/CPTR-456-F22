import { useState, useEffect } from "react"
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        email: "",
    })

    useEffect(() => {
        console.log(formData)
    })

    const handleChange = (event) => {
        const { value, name } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div>
            <input 
                name="name" 
                placeholder="Enter your name..." 
                type="text"
                value={formData.name} 
                onChange={handleChange}
            />
            <input 
                name="color" 
                type="color"
                value={formData.color}
                onChange={handleChange}
            />
            <input 
                name="email" 
                placeholder="Enter your email..." 
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </div>
    )

}

export default Form