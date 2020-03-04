'use strict'

const UserService = use('App/Services/UserService')

class AuthController {

  async register({ request }) {

    const dataRequest = request.only(["username", "email", "password"]);

    return await UserService.register(dataRequest);
  }
}

module.exports = AuthController
