import {NgModule} from "@angular/core";
import {RealEstateComponent} from "./real-estate/real-estate.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
	{path: 'budget/real-estate', component: RealEstateComponent}
]

@NgModule({
	declarations: [
		RealEstateComponent
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
