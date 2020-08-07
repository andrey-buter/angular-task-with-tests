import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  formValueChangesSubscription: Subscription;

  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchVegetable': [null, Validators.required]
    });

     // write a function that calls changeVegetableName upon value change in the form
    this.formValueChangesSubscription = this.searchForm.get('searchVegetable').valueChanges
      .pipe(
        // debounceTime(500),
        // distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.service.changeVegetableName(value);
      });
  }

  ngOnDestroy() {
    this.formValueChangesSubscription.unsubscribe();
  }
}