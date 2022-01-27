import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = '';
  private titleSubs$: Subscription = new Subscription();

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteArguments()
                           .subscribe(({title}) =>{
                              this.title = title;
                              document.title = `AdminPro - ${ title }`
                            });
   }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

   getRouteArguments(){
    return this.router.events
    .pipe(
      filter<any>((event: ActivationEnd) => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    );
   }
}
