import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  count = 0;
  previousIndex: number = 0;
  studentData: any;
  type: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.http.get('./assets/json/user.json').subscribe((res) => {
      this.studentData = res;
      this.count = 0;
    });
  }

  sorting(type: string, index: number) {
    if (this.previousIndex !== index) {
      this.count = 0;
    }
    this.previousIndex = index;
    this.count++;
    if (type == 'name') {
      this.sortingName()
    }
    else {
      this.sortingNumber(type)
    }
  }

  sortingName() {
    if (this.count == 1 || this.count == 2) {
      this.studentData = this.studentData.sort((a: any, b: any) => {
        return this.count == 1 && (a.name > b.name) ? 1 : -1;
      });
    }
    else
      this.getStudentData();
  }

  sortingNumber(type: string) {
    if (this.count == 1 || this.count == 2) {
      this.studentData.sort((a: any, b: any) => {
        if (type == 'class')
          return this.count == 1 ? a.class - b.class : b.class - a.class;
        else if (type == 'sub1')
          return this.count == 1 ? a.sub1 - b.sub1 : b.sub1 - a.sub1;
        else if (type == 'sub2')
          return this.count == 1 ? a.sub2 - b.sub2 : b.sub2 - a.sub2;
        else
          return this.count == 1 ? a.sub3 - b.sub3 : b.sub3 - a.sub3;
      });
    }
    else
      this.getStudentData();
  }
}
