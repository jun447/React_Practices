import conf from "../conf/conf.js";
import {Client, Account, ID} from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteEndpoint)
            .setProject(conf.appWriteProjectID)
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }

        } catch (e) {
            throw e
        }

    }

    async login({email, password}) {
        try {
             return  await this.account.createEmailSession(email, password);
        } catch (e) {
            throw e
        }
        return null
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (e) {
            throw e
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (e) {
            throw e
        }
    }


}

const authService = new AuthService();

export default authService