import {Component,onChanges} from 'angular/core2'
@Component({
	selector: 'ai-star',
	templateUrl: 'app/shared/star.component.html',
	styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements onChanges{
	rating: number = 4;
	starWidth: number;

	ngOnchange(): void{
		this.starWidth = this.rating * 86 / 5;
		
	}
}