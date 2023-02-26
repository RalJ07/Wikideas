import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  // @Output() onSearch: EventEmitter<string> = new EventEmitter();

  searchForm: FormGroup = this.fb.group({
    searchInput: ['', Validators.required]
    
  })

  constructor( private fb: FormBuilder,
               private router: Router ) { }

  
  search( termino: string ) {
    console.log( termino );
    this.searchForm.reset(); 
    // this.router.navigate(['/pages/search-results'])
  }

}
