import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "bootstrap"},
    {"id": 6, "name": "HTML5"},
    {"id": 7, "name": "CSS3"},
    {"id": 8, "name": "Python"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
       let id = parseInt(params.get('id')); //we parse the id of the component to the isSelected property
       this.selectedId = id;
    })
  }


  onSelect(department) {
    this.router.navigate(['/departments', department.id]); //argument to this method is what called an link parameters array and it is all the information angular needs to construct the url
      
  }


  isSelected(department) {
    return department.id === this.selectedId; //this returns the selected id once we toggle back to the department list
  }

}
