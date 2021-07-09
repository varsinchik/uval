import {NgModule} from "@angular/core";
import {BudgetComponent} from "./budget/budget.component";
import {RouterModule, Routes} from "@angular/router";
import {ExpensesComponent} from "./expenses/expenses.component";
import {ForBeerComponent} from "./for-beer/for-beer.component";

const routes: Routes = [
	{path: 'budget', component: BudgetComponent},
	{path: 'expenses', component: ExpensesComponent},
	{path: 'for-beer', component: ForBeerComponent},
];

@NgModule({
	declarations: [
		BudgetComponent,
		ForBeerComponent,
		ExpensesComponent,
	],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeModule {

}
