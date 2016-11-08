import {ReplaySubject} from 'rxjs/ReplaySubject'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMapTo'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/skipUntil'
import 'rxjs/add/operator/do'
import URL from 'url-parse'

export{
    URL,
    ReplaySubject,
    Observable
}
