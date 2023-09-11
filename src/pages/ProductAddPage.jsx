import { Form } from 'react-router-dom';
import { useState } from 'react';

async function addProduct(payload) {
  try {
    await fetch(import.meta.env.VITE_ADD_PRODUCT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    alert('Product successfuly created');
  } catch (error) {
    console.error(error);
    alert('Failed to create new product');
  }
}

function ProductAddPage() {
  const [formData, setFormData] = useState({
    shopName: '',
    town: '',
    startYear: '',
    description: '',
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(false);
    if (formData.description.length < 6) {
      setFormError(true);
      return;
    }
    const payload = { ...formData, startYear: Number(formData.startYear) };
    addProduct(payload);
  };

  return (
    <div className='bgImage bg-cover bg-fixed h-screen flex justify-center items-center'>
      <div className=' bg-white border border-solid border-white w-80 h-fit mr-auto ml-auto rounded-md p-5 shadow-xl'>
        <h2 className='text-center text-2xl'>Add product</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>
              Shop name
              <input
                className='w-full mb-5 h-7 mt-3'
                type='text'
                name='shopName'
                required
                minLength='4'
                value={formData.shopName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Town
              <input
                className='w-full mb-5 h-7 mt-3'
                type='text'
                name='town'
                required
                minLength='4'
                value={formData.town}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Start year
              <input
                className='w-full mb-5 h-7 mt-3'
                type='number'
                name='startYear'
                required
                min='1970'
                max='2022'
                value={formData.startYear}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <textarea
                className='w-full mb-5 h-16 mt-3'
                name='description'
                required
                minLength='6'
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            {formError && <p>Description must be at least 6 characters long</p>}
          </div>
          <div>
            <p>{formError}</p>
          </div>
          <div className='flex items-center'>
            <button
              className='w-2/4 rounded-3xl bg-blue-400 mr-auto ml-auto p-2 text-white'
              type='submit'
            >
              Add product
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ProductAddPage;
