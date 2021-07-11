import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Idebtors} from "../../home.interfaces";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-debtors',
	templateUrl: './debtors.component.html',
	styleUrls: ['./debtors.component.scss']
})
export class DebtorsComponent implements OnInit {

	debtors: Idebtors[] = []

	form: FormGroup | any

	debName = ''
	debAdress = ''
	debDebt = ''


	constructor(
		private http: HttpClient,
		private loc: Location
	) {
	}

	ngOnInit(): void {
		this.http.get<Idebtors[]>('http://fakeapi.jsonparseronline.com/users')
			.subscribe(addrObj => {
					this.debtors = addrObj
				}
			)

		this.form = new FormGroup({
			name: new FormControl('', [
				Validators.required,
				Validators.pattern(/[А-я]/)
			]),
			adress: new FormControl('', Validators.required),
			debt: new FormControl('', Validators.required)

		})


	}


	submit() {

		const newDebt = {
		   name: this.form.value.name,
			adress: this.form.value.adress,
			debt: this.form.value.debt
		}

		this.debtors.push(newDebt)
		console.log(newDebt)

	}

	goBack() {
		this.loc.back();
	}


}
