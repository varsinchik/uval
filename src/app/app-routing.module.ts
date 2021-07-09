import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetComponent} from "./home/budget/budget.component";
import {ExpensesComponent} from "./home/expenses/expenses.component";
import {ForBeerComponent} from "./home/for-beer/for-beer.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'for-beer', component: ForBeerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
