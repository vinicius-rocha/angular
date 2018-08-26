import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingService {
    
    loadginSuject = new Subject<LoadingType>();

    getLoadin() {
        return this.loadginSuject
        .asObservable()
        .pipe(startWith(LoadingType.STOPED));
    }

    start() {
        this.loadginSuject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadginSuject.next(LoadingType.STOPED);
    }
}