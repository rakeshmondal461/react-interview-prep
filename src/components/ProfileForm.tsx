import { useReducer } from "react";
import profileFormReducer from "../reducers/profileFormReducer";

const initialState = {
  values: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hobbies: [],
    country: "",
    termsAccepted: false,
  },
  errors: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hobbies: "",
    country: "",
    termsAccepted: "",
  },
};

const ProfileForm = () => {
  const [state, dispatch] = useReducer(profileFormReducer, initialState);

  const handleSubmit = () => {};

  const handleChange = (e: any) => {
    if (e.target.name === "fullName") {
      dispatch({ type: "set_fullName", payload: e.target.value });
    } else if (e.target.name === "email") {
      dispatch({ type: "set_email", payload: e.target.value });
    } else if (e.target.name === "password") {
      dispatch({ type: "set_password", payload: e.target.value });
    } else if (e.target.name === "confirmPassword") {
      dispatch({ type: "set_confirmPassword", payload: e.target.value });
    }else if (e.target.name === "gender") {
      dispatch({ type: "set_gender", payload: e.target.value });
    }else if (e.target.name === "country") {
      dispatch({ type: "set_country", payload: e.target.value });
    }
  };

  const handleCheckboxChange = (e: any) => {
      if (e.target.name === "hobbies") {
        dispatch({ type: "set_hobbies", payload: e.target.value });
      }else if(e.target.name === "termsAccepted"){
        console.log("e.target.value", e.target.checked);
        dispatch({ type: "set_termsAccepted", payload: e.target.checked });
      }
  };

  console.log("state@@>>>", state);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={state?.values?.fullName}
          />
          {state?.errors?.fullName && <p>{state?.errors?.fullName}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={state.values.email}
          />
          {state.errors.email && <p>{state.errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.values.password}
          />
          {state.errors.password && <p>{state.errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={state.values.confirmPassword}
          />
          {state.errors.confirmPassword && (
            <p>{state.errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={state.values.gender === "Male"}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={state.values.gender === "Female"}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
                checked={state.values.gender === "Other"}
              />{" "}
              Other
            </label>
          </div>
          {state.errors.gender && <p>{state.errors.gender}</p>}
        </div>

        <div>
          <label>Hobbies</label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Reading"
              onChange={handleCheckboxChange}
              checked={state.values.hobbies.includes("Reading")}
            />{" "}
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Sports"
              onChange={handleCheckboxChange}
              checked={state.values.hobbies.includes("Sports")}
            />{" "}
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Music"
              onChange={handleCheckboxChange}
              checked={state.values.hobbies.includes("Music")}
            />{" "}
            Music
          </label>
          {state.errors.hobbies && <p>{state.errors.hobbies}</p>}
        </div>

        <div>
          <label>Country</label>
          <select
            name="country"
            onChange={handleChange}
            value={state.values.country}
          >
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
          {state.errors.country && <p>{state.errors.country}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              onChange={handleCheckboxChange}
              checked={state.values.termsAccepted}
            />
            I accept the Terms & Conditions
          </label>
          {state.errors.termsAccepted && <p>{state.errors.termsAccepted}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProfileForm;
