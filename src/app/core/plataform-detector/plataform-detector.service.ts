import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlataformDetectorService {

    constructor(@Inject(PLATFORM_ID) private plataformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this.plataformId);
    }
}