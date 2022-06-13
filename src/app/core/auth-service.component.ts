import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Constants } from '../constants';
import { CoreModule } from './core.module';

@Injectable({ providedIn: CoreModule })
export class AuthService {

    private _userManager: UserManager;
    private _user!: User;


    constructor() { 
        const stSettings ={
            authority: Constants.stsAuthority,
            client_id: Constants.clientId,
            redirect_uri: `${Constants.clientRoot}signin-callback`,
            scope!: 'openid profile projects-api',
            response_type: 'code',
            post_logout_redirect_uri:`${Constants.clientRoot}signout-callback`,
        };
        this._userManager = new UserManager(stSettings);
     }

     login() {
         return this._userManager.signinRedirect();
     }
}