import React, { useContext, useState } from "react";
import { Link,  useLocation, useNavigate} from "react-router-dom";
import { getAuth, updateProfile, sendEmailVerification } from "firebase/auth";
import app from "./FireBase/firebase.init";
import { toast } from "react-toastify";
import { AuthContext } from "./Context/UserContext";
const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // console.log(from);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //    console.log(user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Profile updated!
            toast.success("Hi " + user.displayName, { autoClose: 5000 });
             navigate(from, { replace: true });
            // Email verification
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              toast.success(
                "An email verification link was sent to your email address.",
                { autoClose: 500 }
              );
            });
          })
          .catch((error) => {
            toast.error(error, { autoClose: 5000 });
          });
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.info(errorMessage, { autoClose: 500 });
        toast.error(errorCode, { autoClose: 5000 });
        setError(errorMessage);
      });
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-20 py-10 bg-base-200">
      <div className="flex flex-col items-center gap-7 lg:text-left w-3/4 lg:w-2/4">
        <h1 className="text-5xl font-bold">Register Here!</h1>
        <img
          src="https://media.istockphoto.com/photos/businessman-working-on-laptop-with-document-management-icon-picture-id1401460590"
          alt=""
        />
      </div>
      <div className="lg:max-w-sm w-3/4 shadow-2xl bg-base-100 rounded-lg card-body">
        <div className="form-control">
          <h1 className="text-4xl font-bold text-center mb-3">Register Here</h1>
          <hr />
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            onBlur={handleName}
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onBlur={handleEmail}
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            onBlur={handlePhoto}
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            onBlur={handlePassword}
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="form-control mt-6">
          <button
            onClick={handleRegister}
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
        <p className="text-center dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="underline px-2 dark:text-gray-100 tooltip tooltip-bottom"
            data-tip="Login"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};;

export default Register;
