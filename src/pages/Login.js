import React, { useState } from 'react'
import './Login.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedDiv, setSelectedDiv] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate()

    const [focus, setFocus] = useState({
        errNamme : false,
        errDob : false,
        errClass : false,
        errDiv : false,
        errGender : false
    })
    const [error , setError] = useState()
    const handelSubmit = (e) => {
        
    }

    const btnClick = (e) => {
        if(!input || !dateOfBirth || !selectedClass || !selectedDiv || !gender) {
            console.log("SDFASdfasdf");
            const obj = {}
            if(!input) {
                obj.input = 'Fill this field'
            }
            if(!dateOfBirth) {
                obj.dateOfBirth = 'Fill this field'
            }
            if(!selectedClass) {
                obj.selectedClass = 'Fill this field'
            }
            if(!selectedDiv) {
                obj.selectedDiv = 'Fill this field'
            } 
            if(!gender) {
                obj.gender = 'Fill this field'
            }
            setError(obj)
        } else {
            alert(`Wellcome ${input}`)
            navigate('/submit' , {state : input})
        }
    }

    const handlChange = (e) => {
        setInput(e.target.value)
        setError({
            ...error ,
            input : ''
        })
    }

    const handleDateChange = (e) => {
        setDateOfBirth(e.target.value);
        setError({
            ...error ,
            dateOfBirth : ''
        })
    };

    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
        setError({
            ...error ,
            selectedClass : ''
        })
    };

    const handleDivChange = (e) => {
        setSelectedDiv(e.target.value);
        setError({
            ...error ,
            selectedDiv : ''
        })
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        setError({
            ...error ,
            gender : ''
        })
    };
console.log(error?.input);

    return (
        <div className='border-login mb-5'>
            <div>
                <img className='logo-login' src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg' />
            </div>
            <form onSubmit={handelSubmit}>
                <div className='login-form'>
                    <div className='name-login ms-3 mt-4'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3 w-75"
                        >
                            <Form.Control
                                className='cletter'
                                type="text"
                                pattern="^[a-zA-Z]+$"
                                name="username"
                                value={input}
                                onChange={handlChange}
                                placeholder="name"
                                // onBlur={()=>setFocus({...focus,errNamme :true})}
                                // focus={focus.errNamme.toString()}
                                required
                            />
                            {
                            error?.input && <span className='text-danger'>please fill out this field</span>
                            }
                        </FloatingLabel>
                        
                    </div>
                    <div className='ms-3 mt-4'>
                        <FloatingLabel controlId="floatingInput" label="Date of Birth" className="mb-3 w-75">
                            <Form.Control
                                type="date"
                                pattern='^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'
                                value={dateOfBirth}
                                onChange={handleDateChange}
                                onBlur={()=>setFocus({...focus,errDob :true})}
                                focus={focus.errDob.toString()}
                                required
                            /> {
                                error?.dateOfBirth && <span className='text-danger'>please fill out this field</span>
                                }
                        </FloatingLabel>
                    </div>
                    <div className='ms-3 mt-4'>
                        <FloatingLabel controlId="floatingSelect" label="Select your class:" className="w-75">
                            <Form.Select aria-label="Floating label select example"
                                pattern='^[a-zA-Z]{4}$'
                                value={selectedClass}
                                onChange={handleClassChange}
                                onBlur={()=>setFocus({...focus,errClass :true})}
                                focus={focus.errClass.toString()}
                                required
                            >
                                <option value="">Select Class</option>
                                <option value="1">I</option>
                                <option value="2">II</option>
                                <option value="3">III</option>
                                <option value="4">IV</option>
                                <option value="5">V</option>
                                <option value="6">VI</option>
                                <option value="7">VII</option>
                                <option value="8">VIII</option>
                                <option value="9">IX</option>
                                <option value="10">X</option>
                                <option value="11">XI</option>
                                <option value="12">XII</option>
                            </Form.Select>
                        </FloatingLabel> {
                            error?.selectedClass && <span className='text-danger'>please fill out this field</span>
                            }
                    </div>
                    <div className='ms-3 mt-4'>
                        <FloatingLabel controlId="floatingSelect" label="Select Division:" className='w-75'>
                            <Form.Select aria-label="Floating label select example" pattern='^[a-zA-Z]{2}$' value={selectedDiv} onChange={handleDivChange} focus={focus.errDiv.toString()}  onBlur={()=>setFocus({...focus,errDiv :true})} required>
                                <option value="">Select Division</option>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                            </Form.Select>
                        </FloatingLabel> {
                            error?.selectedDiv && <span className='text-danger'>please fill out this field</span>
                            }
                    </div>
                    <div className='ms-3 mt-3 mb-4'>
                        <label><b>Gender:</b></label>
                        <label className='ms-2 me-2'>
                            <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} required />
                            Male
                        </label>

                        <label>
                            <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} required />
                            Female
                        </label><br /> {
                                        error?.gender && <span className='text-danger'>please fill out this field</span>
                                        }

                    </div>
                    <div className='login-btn mb-4'>
                        <a><Button onClick={btnClick} variant="danger"><b className='text-white'>Submit</b></Button></a>
                    </div>

                </div>
            </form>

        </div >
    )
}

export default Login