import { useForm } from "react-hook-form";
import Select from 'react-select';
import EmailForm from "../emailForm/EmailForm";
import chief from "../../assets/img/chief.png";
import './contact.css';


const options = [
    {
        value: 'advertising',
        label: 'Advertising',
    },
    {
        value: 'commercial',
        label: 'Commercial',
    },
    {
        value: 'support',
        label: 'Support',
    },
]

function Contact () {
    const { handleSubmit, register, formState: { errors } } = useForm();
    

    function onSubmit(values) {
        console.log(values);
    }
    return (
        <>
        <div className= 'vector'></div>
        <div className="title">
            <h1>Contact us</h1>
        </div>
        <div className= 'contact'>
            <div className='chiefimg'>
                <img src={chief} alt="Chief." />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-common">
                <div className="form1">
                <div className="form-item">
                    <label className="labelname">NAME</label>
                    <input
                        className={errors.name ? 'error' : ''}      
                        type="text"
                        placeholder="Enter your name..."
                        {...register("name", {
                        required: "Required",
                        pattern: {
                            value: /(\w|\s|[\.\'-])+/,
                            message: "Incorrect name"
                        }
                        })}
                    />
                    <p className={'error-message'}>{errors.name && errors.name.message}</p>
                </div>
                <div className="form-item">
                    <label className="labelname">SUBJECT</label>
                    <input
                        className={errors.name ? 'error' : ''}      
                        type="text"
                        placeholder="Enter your subject..."
                        {...register("subject", {
                        required: "Required",
                        pattern: {
                            value: /(\w|\s|[\.\'-])+/,
                            message: "Incorrect subject"
                        }
                        })}
                    />
                    <p className={'error-message'}>{errors.subject && errors.subject.message}</p>
                </div>
                </div>
                <div className="form2">
                <div className="form-item">
                    <label className="labelname">EMAIL ADDRESS</label>
                    <input
                        className={errors.email ? 'error' : ''}      
                        type="email"
                        placeholder="Enter your email..."
                        {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Incorrect email"
                        }
                        })}
                    />
                    <p className={'error-message'}>{errors.email && errors.email.message}</p>
                </div>
                <div className="form-item-select">
                    <label className="labelname">ENQUIRY TYPE</label>
                    <Select
                        className={errors.select ? 'error' : ''}      
                        type="select"
                        placeholder="Choose your type"
                        options={options}
                    />
                    <p className={'error-message'}>{errors.select && errors.select.message}</p>
                </div>
                </div>
            </div>
            <div className="form-item-message">
                    <label className="labelname">MESSAGES</label>
                    <textarea
                        className={errors.message ? 'error' : ''}      
                        placeholder="Enter your Messages..."
                        rows="10"
                        {...register("message", {
                        required: "Required",
                        pattern: {
                            value: /(\w|\s|[\.\'-])+/,
                            message: "Incorrect message"
                        }
                        })}
                    />
                    <p className={'error-message'}>{errors.message && errors.message.message}</p>
                </div>
                <button className="form-button" type="submit">Submit</button>
            </form>
        </div>
        <EmailForm />
        </>
        )
}
export default Contact;