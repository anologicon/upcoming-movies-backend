'use strict'

const UserService = use('App/Services/UserService')

class AuthController {

  async register({ request }) {

    const dataRequest = request.only(["username", "email", "password"]);

    console.log(dataRequest);
    

    return await UserService.register(dataRequest);
  }

  async authenticate({request, auth}) {

    const {email, password } = request.all()
    
    return await auth.attempt(email, password);
  }

}

module.exports = AuthController
