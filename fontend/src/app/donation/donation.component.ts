import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {


  activityId: number = 0;

  activity: any = {}; 

  constructor(private route: ActivatedRoute , private http: HttpClient) { }


  ngOnInit(): void {
    this.activityId = +this.route.snapshot.paramMap.get('activityId')!
    this.getActivity()
  }

  getActivity() {
    this.http.get<any>('http://localhost:8080/api/activities/' + this.activityId).subscribe({
      next: (data) => {
        this.activity = data; 
        console.log('Fetched activity:', this.activity);
      },
      error: (error) => {
        console.error('Failed to fetch activity:', error);
      },
    });
  }

}
