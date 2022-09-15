import { Injectable } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor(private mediaObserver: MediaObserver) {
        this.handleChange();
    }

    sideNavVisibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    sideNavPosition: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('side');

    private handleChange() {
        this.mediaObserver
            .asObservable()
            .pipe(
                filter((changes: MediaChange[]) => changes.length > 0),
                map((changes: MediaChange[]) => changes[0])
            )
            .subscribe((change) => {
                this.sideNavVisibility.next(change.mqAlias === 'md' ? false : true);
                this.sideNavPosition.next(change.mqAlias === 'md' ? 'over' : 'side');
            })
    }

    toggleMenuVisibility() {
        const visibility = !this.sideNavVisibility.value;
        this.sideNavVisibility.next(visibility);
    }
}