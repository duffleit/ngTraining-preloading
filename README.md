# Preloading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Tasks

1. Create a new `Search` Module with a `SearchComponent` and load it lazily under `/search`.
2. Make the `Checkout` and the `Orders` lazy loaded.
3. Enable Angular's PreloadAllModules-strategy, to preload all lazy loaded modules:

```
RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: PreloadAllModules
});
```

4. Implement an own Preloading-Strategy that allows to configuring Preloading per lazy-loaded module:

```
# routes definition:

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { preload: true }    // <----
  },
}
```

```
# Implement an own Preloading Strategy

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    ...
  }
}
```
