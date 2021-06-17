import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id; //binding the local parameter to the departmentId and adding it to the view.

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }

  goToPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goToNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;  //assign the id of the dept currently in the view
    this.router.navigate(['/departments', {id: selectedId}]);//the object is the optional route parameter
  }

}
