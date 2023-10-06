import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'
import {Form,useNavigation} from 'react-router-dom'
export const SearchForm = () => {
  const navigation =useNavigation()
  const isSubmitting=navigation.state==='submitting'
  return (
    <Wrapper>
  <Form className='form'>
    <input type='search' name='search' className='form-input' />
    <button type='submit' disabled={isSubmitting} className='btn'  >
    {isSubmitting?'submitting':'submit'}
    </button>
  </Form>

    </Wrapper>
  )
}
