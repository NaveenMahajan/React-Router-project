
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation =useNavigation()
  const isSubmitting=navigation.state==='submitting'
  return (
   <Form className='form'method="POST">
  <h4 style={{textAlign:'center',marginBottom:'2rem'}}>our newsletter</h4>
  <div className="form-row">
    <label htmlFor='name' className='form-label'>name</label>
    <input type="text"  className='form-input' style={{marginBottom:'1rem'}} name='name' id='name' required />
    <label htmlFor='last-name' className='form-label'>last-name</label>
    <input type="text" className='form-input' style={{marginBottom:'1rem'}}  name='lastName' id='lastName'   required />
    <label htmlFor='email' className='form-label'>email</label>
    <input type="email" className='form-input' style={{marginBottom:'1rem'}}  name='email' id='email' required  defaultValue='test@test.com'/>
    <button type='submit' disabled={isSubmitting} className='btn btn-block' style={{marginTop:'0.5rem'}} >
      {isSubmitting?'submitting':'submit'}
    </button>
  </div>
   </Form>
  )
}

export default Newsletter