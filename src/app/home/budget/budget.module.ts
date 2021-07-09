import {NgModule} from "@angular/core";
import {RealEstateComponent} from "./real-estate/real-estate.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {DebtorsComponent} from './debtors/debtors.component';

const routes: Routes = [
	{path: 'budget/real-estate', component: RealEstateComponent}
]

@NgModule({
	declarations: [
		RealEstateComponent,
		DebtorsComponent
	],
	imports: [
		RouterModule.forChild(routes),
		HttpClientModule,
		BrowserModule
	],
	exports: [RouterModule]
})

export class BudgetModule {

}
