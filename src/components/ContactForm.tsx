import Button from './Button';
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseYear, chooseTransmission } from '../redux/slices/RootSlice';

// interfaces

interface ContactFormProps {
  id?: string[];
}

const ContactForm = ( props: ContactFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id }`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${ data.make } ${ props.id }`);
      setTimeout(() => {window.location.reload()}, 2000);
      event.target.reset();
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseTransmission(data.transmission));

      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (

    // TODO - add Handle Function with state management
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name="make" placeholder="Enter Make..." />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name="model" placeholder="Enter Model..." />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name="year" placeholder="Enter Year..." />
        </div>
        <div>
          <label htmlFor="transmission">Transmission</label>
          <Input {...register('transmission')} name="transmission" placeholder="Cylinders..." />
        </div>
        <div className="flex p-1">
          <Button
            className='flex justify-start m-3 bg-orange-300 p-2 rounded hover:bg-black text-white'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
