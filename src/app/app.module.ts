import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ForBeerComponent} from './home/for-beer/for-beer.component';
import {ExpensesComponent} from './home/expenses/expenses.component';
import {BudgetComponent} from './home/budget/budget.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ForBeerComponent,
    ExpensesComponent,
    BudgetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
