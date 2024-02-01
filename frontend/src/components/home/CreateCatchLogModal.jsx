import { React } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const CreateCatchLogModal = ({ onClose }) => {

    const curUser = useSelector(state => state.user.curUser);

    const initialValues = {
      species: '',
      // Saves date in ISO string format YYYY-MM-DD
      date: new Date().toISOString().split('T')[0],
      length: 0,
      weight: 0,
      lure: '',
      location: ''
    };

    const validationSchema = Yup.object({
      species: Yup.string()
        .required('Species is required'),
      date: Yup.string()
        .required('Date is required'),
      length: Yup.number()
        .min(0, 'Please enter a valid length'),
      weight: Yup.number()
        .min(0, 'Please enter a valid weight'),
      lure: Yup.string(),
      location: Yup.string()
    });

    const handleSaveCatchLog = async (values) => {
        axios
        .post('/api/catchLogs', {...values, user: curUser})
        .then(() => {
            window.location = '/';
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleSaveCatchLog
    });



  return (
    <form
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center select-none'
        onClick={onClose}
        onSubmit={formik.handleSubmit}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[800px] max-w-full h-[700px] bg-white rounded-xl p-4 flex flex-col justify-center'
        >
            <div className='p-0 flex flex-col space-y-8 mt-0 bg-yellow-00'>
                <h1 className='text-3xl my-0 text-center bg-slate-00'>Create Catch</h1>
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-red-00'>

                  <div className=' mb-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='speciesInput'>Species *</label>
                      {formik.touched.species && formik.errors.species && (<div className="error text-red-600 text-sm">{formik.errors.species}</div>)}
                    </span>
                    <input
                        id='speciesInput'
                        type='text'
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.species}
                        {...formik.getFieldProps('species')}
                    />
                  </div>

                  <div className='my-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='dateInput'>Date *</label>
                      {formik.touched.date && formik.errors.date && (<div className="error text-red-600 text-sm">{formik.errors.date}</div>)}
                    </span>
                    <input
                        id='dateInput'
                        type='date'
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        {...formik.getFieldProps('date')}

                    />
                  </div>

                  <div className='my-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='lengthInput'>Length (in)</label>
                      {formik.touched.length && formik.errors.length && (<div className="error text-red-600 text-sm">{formik.errors.length}</div>)}
                    </span>
                    <input
                        id='lengthInput'
                        type='number'
                        className='border-2 border-gray-500 px-4 py-2 w-full invalid:border-red-500'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.length}
                        {...formik.getFieldProps('length')}
                    />
                  </div>

                  <div className='my-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='weightInput'>Weight (lb)</label>
                      {formik.touched.weight && formik.errors.weight && (<div className="error text-red-600 text-sm">{formik.errors.weight}</div>)}
                    </span>
                    <input
                        id='weightInput'
                        type='number'
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.length}
                        {...formik.getFieldProps('weight')}
                    />
                  </div>

                  <div className='my-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='lureInput'>Lure</label>
                      {formik.touched.lure && formik.errors.lure && (<div className="error text-red-600 text-sm">{formik.errors.lure}</div>)}
                    </span>
                    <input
                        id='lureInput'
                        type='text'
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lure}
                        {...formik.getFieldProps('lure')}
                    />
                  </div>

                  <div className='my-1'>
                    <span className='flex items-end justify-between'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='locationInput'>Location</label>
                      {formik.touched.location && formik.errors.location && (<div className="error text-red-600 text-sm">{formik.errors.location}</div>)}
                    </span>
                    <input
                        id='locationInput'
                        type='text'
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        {...formik.getFieldProps('location')}
                    />
                  </div>

                  <button className='mt-5 p-4 bg-sky-300 m-0 rounded-xl' type='submit'>
                    Save
                  </button>
                </div>
            </div>
        </div>
    </form>
    
  )
}

export default CreateCatchLogModal