import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const capchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const {login} = useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = capchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
           setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={capchaRef}
                placeholder="Type the text above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p><small>New In here ? <Link className='text-primary' to='/register'>create an Account</Link> </small></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
