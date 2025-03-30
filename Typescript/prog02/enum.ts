// enums are a special class that allows developers to define a set of named constants

enum LoginError {
  unAuthorized,
  noUser,
  wrongCredentials,
  internal,
}

const printErrorMsg = (error: LoginError) => {
  if (error == LoginError.unAuthorized) {
    console.log("Unauthorized User");
  } else if (error == LoginError.noUser) {
    console.log("No user");
  } else if (error == LoginError.wrongCredentials) {
    console.log("Wrong credentials");
  } else {
    console.log("Internal Error");
  }
};

printErrorMsg(LoginError.noUser)