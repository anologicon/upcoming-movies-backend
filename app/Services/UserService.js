'use strict'

const UserModel = use('App/Models/User');
const Config = use("Config");

class UserService {
    
  constructor(Config) {
    this.Config = Config;
  }

  async register(arrayDataValues) {
    const user = await UserModel.create(arrayDataValues);

    return user;
  }
}

module.exports = new UserService(Config);