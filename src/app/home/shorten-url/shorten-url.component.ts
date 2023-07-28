import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as urlActions from '../shorten-url/state/actions';
import * as fromRoot from '../shorten-url/state';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  afterShortedUrl: string = '';
  url: string = '';

  constructor(private readonly store: Store) {
    this.store.select(fromRoot.urlSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      if (data.isLoadingSuccess && data.result.result) {
        this.afterShortedUrl = data.result.result.short_link;
      }
    });
  }

  ngOnInit(): void {
  }

  generateShortenUrl() {
    this.store.dispatch(urlActions.generateUrl({ url: { urlName: this.url } }));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
