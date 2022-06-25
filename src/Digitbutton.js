function App() {
  const [values, setValues] = useState(
    {
      username: '',
      email: '',
      birthday: '',
      password: '',
      confirmPassword: ''
    }
  )

  const inputs = [
    {
      id: '1',
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'Username should be 3-16 characters and should not include any special characters',
      label: 'Username',
      pattern: "^[A-Za-z0-9]{3,16}$",  //Regex Code
      required: true
    },
    {
      id: '2',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Invalid email Address',
      label: 'Email',
      required: true
    },
    {
      id: '3',
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: ' Birthday'
    },
    {
      id: '4',
      name: 'password',
      type: 'password ',
      placeholder: 'Password',
      errorMessage: 'Please enter password',
      label: 'Password',
      errorMessage: 'Password should contain 8-20 characters and include at atleast 1 letter, 1 number and 1 special characters',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',  //Regex Code
      required: true
    },
    {
      id: '5',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password did not match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true
    }
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map(input => (
            <Nav key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))
        }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;



import './topbar.css'
import React ,{useState} from 'react'
function Nav(props) {
  const[focused,setFocused]=useState(false)
  const handleFocus=()=>{
    setFocused(true)
  }
  const { label, id, onChange, errorMessage, ...inputProps } = props
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur ={handleFocus} focused={focused.toString()}></input>
      <span>{errorMessage}</span>
    </div>
  )
}

export default Nav; 