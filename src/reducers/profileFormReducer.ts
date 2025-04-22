export default function profileFormReducer(state: any, action: any) {
  switch (action.type) {
    case "set_fullName":
      return {
        ...state,
        values: {
          ...state.values,
          fullName: action.payload,
        },
      };
    case "set_email":
      return {
        ...state,
        values: {
          ...state.values,
          email: action.payload,
        },
      };
    case "set_password":
      return {
        ...state,
        values: {
          ...state.values,
          password: action.payload,
        },
      };
    case "set_confirmPassword":
      return {
        ...state,
        values: {
          ...state.values,
          confirmPassword: action.payload,
        },
      };
    case "set_gender":
      return {
        ...state,
        values: {
          ...state.values,
          gender: action.payload,
        },
      };
    case "set_country":
      return {
        ...state,
        values: {
          ...state.values,
          country: action.payload,
        },
      };
    case "set_hobbies":
      return {
        ...state,
        values: {
          ...state.values,
          hobbies: action.payload,
        },
      };
    case "set_termsAccepted":
      return {
        ...state,
        values: {
          ...state.values,
          termsAccepted: action.payload,
        },
      };

    default:
      return state;
  }
}
