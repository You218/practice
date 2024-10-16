import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  searchText : string = '';
  @ViewChild('searchInput') searchInputEl : ElementRef | null = null;
  updatedSearchText() {
    if (this.searchInputEl) {
      this.searchText = this.searchInputEl.nativeElement.value;
      //console.log(this.searchText)
    }
  }
}
