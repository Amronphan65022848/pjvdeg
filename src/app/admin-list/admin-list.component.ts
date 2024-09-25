import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {
  activities = [
    {
      name: "VDEG's 7th Volunteer Camp",
      date: '16-22/03/23',
      informationLink: '#',
      filesLink: '#',
      status: false,
    },
    {
      name: "VDEG's 9th Volunteer Camp",
      date: '16-22/03/24',
      informationLink: '#',
      filesLink: '#',
      status: true,
    },
    {
      name: "VDEG's 2nd Donation Fair",
      date: '10/04/24',
      informationLink: '#',
      filesLink: '#',
      status: true,
    },
    {
      name: "VDEG's 10th Volunteer Camp",
      date: '16-22/10/24',
      informationLink: '#',
      filesLink: '#',
      status: false,
    },
    {
      name: "VDEG's 1st Donation Fair",
      date: '21/08/23',
      informationLink: '#',
      filesLink: '#',
      status: false,
    },
    {
      name: "VDEG's 3rd Donation Fair",
      date: '25/06/24',
      informationLink: '#',
      filesLink: '#',
      status: true,
    },
    {
      name: "VDEG's 8th Volunteer Camp",
      date: '16-22/10/23',
      informationLink: '#',
      filesLink: '#',
      status: true,
    },
    {
      name: "VDEG's 6th Volunteer Camp",
      date: '16-22/03/22',
      informationLink: '#',
      filesLink: '#',
      status: false,
    },
  ];
}
