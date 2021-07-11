import {NgModule} from "@angular/core";
import {RealEstateComponent} from "./real-estate/real-estate.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {DebtorsComponent} from './debtors/debtors.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
	{path: 'budget/real-estate', component: RealEstateComponent},
	{path: 'budget/debtors', component: DebtorsComponent}
]

@NgModule({
	declarations: [
		RealEstateComponent,
		DebtorsComponent
	],
	imports: [
		RouterModule.forChild(routes),
		HttpClientModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [RouterModule]
})

export class BudgetModule {

}
