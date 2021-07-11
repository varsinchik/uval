import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAdress} from "../../home.interfaces";
import {Location} from "@angular/common";

@Component({
	selector: 'app-real-estate',
	templateUrl: './real-estate.component.html',
	styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {

	adress: IAdress[] = []

	constructor(
		private http: HttpClient,
		private loc: Location
	) {
	}

	ngOnInit(): void {
		this.http.get<IAdress[]>('http://fakeapi.jsonparseronline.com/users')
			.subscribe(addrObj => {
				this.adress = addrObj
				}
			)
	}

	goBack() {
		this.loc.back();
	}
}
