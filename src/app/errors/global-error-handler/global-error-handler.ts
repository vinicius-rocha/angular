import { ErrorHandler, Injector, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { UserService } from '../../core/user/user.service';
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

     constructor(private injector: Injector) { }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const logService = this.injector.get(ServerLogService);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames.map(sf => sf.toString()).join('\n');

                console.log(message);
                console.log(stackAsString);
                
                logService.log({
                    url, 
                    userName: userService.getUserName(), 
                    message, 
                    stack: stackAsString
                })
                .subscribe(
                    () => console.log('Error logged on server'),
                    error => console.log(error + '\nFail to send error to server')
                );
            });
    }
}