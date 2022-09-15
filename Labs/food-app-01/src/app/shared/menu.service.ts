import { Injectable } from "@angular/core";
import { MatDrawerMode } from '@angular/material/sidenav';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor(private mediaObserver: MediaObserver) {
        this.handleChange();
    }

    visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('over');

    private handleChange() {
    //     this.mediaObserver
    //         .asObservable
    //         .pipe(
    //             filter((changes: MediaChange[]) => changes.length > 0),
    //             map((changes: MediaChange[]) => changes[0])
    //         )
    //         .subscribe((change) => {
    //             this.visible$.next(change.mqAlias == 'xs' ? false : true);
    //             this.position$.next(change.mqAlias == 'xs' ? 'over' : 'side');
    //         })
    }

    toggleMenuVisibility() {
        let nextVal = !this.visible$.value;
        this.visible$.next(nextVal);
    }
}