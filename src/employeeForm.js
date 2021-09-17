import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const EmployeeForm = (props) => {
  const [name, setName] = useState('');
  const [gen, setGen] = useState('Male');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  function hobHandler(e) {
    let hob = hobbies;
    if (e.target.checked) {
      setHobbies([...hob, e.target.value]);
    } else {
      hob = hob.filter((value) => {
        return value != e.target.value;
      });

      setHobbies([...hob]);
    }
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateName(name) {
    var RegEx = /^[0-9a-zA-Z]+$/i;
    return RegEx.test(String(name).toLowerCase());
  }

  function validateDate(dob) {
    var myDate = new Date(dob);
    var today = new Date();
    return myDate > today;
  }

  function validatePhone(phone) {
    return phone.length == 10;
  }

  const save = (emp) => {
    let empList = [];
    if (localStorage.getItem('empList')) {
      empList = JSON.parse(localStorage.getItem('empList'));
    }
    empList.push(emp);
    localStorage.setItem('empList', JSON.stringify(empList));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length < 4 || name.length > 20) {
      setErrorMsg('Enter name between 4 to 20 character');
      return;
    }
    if (!validateName(name)) {
      setErrorMsg('Enter name in alphanumeric');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg('Enter valid email');
      return;
    }

    if (validateDate(dob)) {
      setErrorMsg('Enter date less than today');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMsg('Phone Should be 10 digit ');
      return;
    }
    save({ name, email, dob, gen, hobbies: hobbies.join(','), phone });
    setName('');
    setEmail('');
    setErrorMsg('');
    setDob('');
    setPhone('');
    setGen('');
    setHobbies([]);
    history.replace('/');
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <div className='card'>
            <div className='card-header bg-primary'>
              <h4 className='card-title text-white'>Employee Form</h4>
            </div>
            <div className='card-body'>
              <p className='text-danger'>{errorMsg ? errorMsg : ''}</p>
              <form onSubmit={onSubmitHandler}>
                <div className='form-group mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    placeholder='Enter name'
                    value={name}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    className='form-control form-input border-2 rounded'
                    placeholder='Enter name'
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label className='form-label'>Date Of Birth</label>
                  <input
                    type='date'
                    id='DOB'
                    name='DOB'
                    className='form-control form-input border-2 rounded'
                    placeholder='Enter name'
                    value={dob}
                    required
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='gen'
                        name='gen'
                        className='form-check-input'
                        value='Male'
                        checked
                        required
                        onChange={(e) => {
                          setGen(e.target.value);
                        }}
                      />
                      <label className='form-label'>Male</label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='gen'
                        name='gen'
                        className='form-check-input'
                        value='Female'
                        required
                        onChange={(e) => {
                          setGen(e.target.value);
                        }}
                      />
                      <label className='form-label'>Female</label>
                    </div>
                  </div>
                </div>
                <div className='form-group mb-3'>
                  <label className='form-label'>Phone</label>
                  <input
                    type='number'
                    id='phone'
                    name='phone'
                    className='form-control form-input border-2 rounded'
                    placeholder='Enter Phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group mb-3'></div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='Cricket'
                    id='flexCheckDefault'
                    onChange={(e) => hobHandler(e)}
                  />
                  <label className='form-check-label'>Cricket</label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='Football'
                    id='flexCheckChecked'
                    onChange={(e) => hobHandler(e)}
                  />
                  <label className='form-check-label'>Football</label>
                </div>
                <div className='form-group mt-2'>
                  <button type='submit' className='btn btn-success'>
                    Submit
                  </button>
                  &nbsp;
                  <Link to='/' className='btn btn-secondary'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
