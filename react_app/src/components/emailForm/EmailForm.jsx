import { useForm } from "react-hook-form";
import './emailform.css';
import veg from "../../assets/img/veg.png";
import plate from "../../assets/img/plate.png";



function EmailForm () {
    const { handleSubmit, register, formState: { errors } } = useForm();
    
    function onSubmit(values) {
        console.log(values);
    }
    return (
        <>
        <div className='emailform'>
            <h2>Deliciousness to your inbox</h2>
            <h3>Subscribe to receive free updated and recipes vie e-mail</h3>
            <div className='vegetables'>
                <img src={veg} alt="Vegetables." />
                <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className='buttonsubmit'>Subscribe</button>
                </form>
                <img src={plate} alt="Plate." />
            </div>
        </div>
        </>
            
    )
}
        
export default EmailForm;