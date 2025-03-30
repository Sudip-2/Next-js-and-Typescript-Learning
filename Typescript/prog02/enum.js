// enums are a special class that allows developers to define a set of named constants
var LoginError;
(function (LoginError) {
    LoginError[LoginError["unAuthorized"] = 0] = "unAuthorized";
    LoginError[LoginError["noUser"] = 1] = "noUser";
    LoginError[LoginError["wrongCredentials"] = 2] = "wrongCredentials";
    LoginError[LoginError["internal"] = 3] = "internal";
})(LoginError || (LoginError = {}));
var printErrorMsg = function (error) {
    if (error == LoginError.unAuthorized) {
        console.log("Unauthorized User");
    }
    else if (error == LoginError.noUser) {
        console.log("No user");
    }
    else if (error == LoginError.wrongCredentials) {
        console.log("Wrong credentials");
    }
    else {
        console.log("Internal Error");
    }
};
printErrorMsg(LoginError.noUser);
