

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

class EpicLocation extends HTMLElement {
    constructor() {
        super();
        console.log('test');
        this._state$ = this._state(this._sources$);
        this._clicks$ = Observable.fromEvent(document, 'click');
    }
    get attributes$(){
        return this._attributes$;
    }
    get state$(){
        return this._state$;
    }
    get popstate(){
        return this.hasAttribute('popstate');
    }
    set popstate(value){
        console.log(value===true);
    }
    get hash(){
        return this.hasAttribute('hash');
    }
    set hash(value){
        console.log(value===true);
    }
    get clicks(){
        return this.hasAttribute('hash');
    }
    static get observedAttributes() {
        return ['popstate', 'hash', 'clicks'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(newValue !== oldValue){
            this[attrName] = newValue || '';
        }
    }
    connectedCallback() {
        this.clicks$.subscribe(x=>console.log(x));
    }
    disconnectedCallback() {

    }
    _state(sources$){
        // let attributeChanges$ = sources$.filter(x=x.type==='attribute-changed');
    }


}
customElements.define("epic-location", EpicLocation);
