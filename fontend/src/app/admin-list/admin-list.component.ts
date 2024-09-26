import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  activities: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.fetchActivities(); // Call the method to fetch activities when the component initializes
  }

  fetchActivities() {
    this.http.get<any[]>('http://localhost:8080/api/activities').subscribe({
      next: (data) => {
        this.activities = data; // Store the fetched activities
        console.log('Fetched activities:', this.activities); // Log the fetched data
      },
      error: (error) => {
        console.error('Failed to fetch activities:', error); // Handle error
      },
      complete: () => {
        this.loading = false; // Stop loading
      }
      
    });
  }

  updateActivityStatus(activity: any) {
    this.loading = true;
    // Send the updated status directly as a boolean
    this.http.put(`http://localhost:8080/api/activities/${activity.activityId}/status`, activity.status).subscribe({
        
        next: (response) => {
          
            console.log('Activity status updated successfully:', response);
        },
        error: (error) => {
            console.error('Failed to update activity status:', error);
        },
        complete: () => {
          this.loading = false; // Stop loading
        }
    });
}

gotoAdmin() {
  window.location.href = '/admin';
}


  // activities = [
  //   {
  //     name: "VDEG's 7th Volunteer Camp",
  //     date: '16-22/03/23',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: false,
  //   },
  //   {
  //     name: "VDEG's 9th Volunteer Camp",
  //     date: '16-22/03/24',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: true,
  //   },
  //   {
  //     name: "VDEG's 2nd Donation Fair",
  //     date: '10/04/24',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: true,
  //   },
  //   {
  //     name: "VDEG's 10th Volunteer Camp",
  //     date: '16-22/10/24',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: false,
  //   },
  //   {
  //     name: "VDEG's 1st Donation Fair",
  //     date: '21/08/23',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: false,
  //   },
  //   {
  //     name: "VDEG's 3rd Donation Fair",
  //     date: '25/06/24',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: true,
  //   },
  //   {
  //     name: "VDEG's 8th Volunteer Camp",
  //     date: '16-22/10/23',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: true,
  //   },
  //   {
  //     name: "VDEG's 6th Volunteer Camp",
  //     date: '16-22/03/22',
  //     informationLink: '#',
  //     filesLink: '#',
  //     status: false,
  //   },
  // ];
}
