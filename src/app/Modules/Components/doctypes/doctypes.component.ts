import { Component } from '@angular/core';

@Component({
  selector: 'app-doctypes',
  templateUrl: './doctypes.component.html',
  styleUrls: ['./doctypes.component.scss']
})
export class DoctypesComponent {
   
  clickedIndex: number | null = null;
  certificate_name:string = ""
  certificates: any = [
    {
      name: 'Completion Certificate',
      status: 'Active',
    },
    {
      name: 'Participation Certificate',
      status: 'Active',
    },
    {
      name: 'Training Certificate',
      status: 'Active',
    },
    {
      name: 'Aramco Learning Program Certificate',
      status: 'Active',
    },
  ];
  panelOpenState = false;
  searchText: string = '';
  filteredItems: any = this.certificates;





  selecteditem(item:any,index:number){
    console.log("", item);
    this.certificate_name = item.name;
    this.clickedIndex = index;
  }

  onSearchTextChange() {
      this.filteredItems = this.certificates.filter((item:any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
