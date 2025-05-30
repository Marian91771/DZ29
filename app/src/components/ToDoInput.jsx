import { Form, Formik, ErrorMessage, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addItem } from '../store/ToDoSlice';

export default function ToDoInput() {

    const ToDo = useSelector(state => state.ToDos.data);
    const dispatch = useDispatch();

    const onAdd = (values) => {
        dispatch(addItem({value: values.ToDo}));
    };

    const ToDoSchem = Yup.object({
        ToDo: Yup.string()
            .min(5, 'Must be longer then 5 caracters')
            .max(20, 'Must be shorter then 20 caracters')
            .required('Required'),
    })

    return (
        <Formik
            initialValues={{ToDo: ''}}
            enableReinitialize={true}
            validationSchema={ToDoSchem}
            onSubmit={(values, { resetForm }) => {
                onAdd(values)
                resetForm()
            }}
        >
            <Form>
                <p>Add task</p>
                <div>
                    <Field name='ToDo' placeholder='Task'/>
                    <button type='submit'>Add</button>
                </div>
                <ErrorMessage name='ToDo' component='div'/>
            </Form>
        </Formik>
    )
}