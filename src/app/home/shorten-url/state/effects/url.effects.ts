import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from '../../_services/app.service';
import * as urlActions from '../actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) { }

  urlService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(urlActions.generateUrl),
      exhaustMap(action =>
        this.appService.generateShortUrlApi(action.url).pipe(
          map(response => urlActions.generateUrlSuccess(response)),
          catchError((error: any) => of(urlActions.generateUrlFailure(error))))
      )
    )
  );

}
