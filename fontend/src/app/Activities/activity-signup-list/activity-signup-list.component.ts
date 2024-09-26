import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-signup-list',
  templateUrl: './activity-signup-list.component.html',
  styleUrls: ['./activity-signup-list.component.css']
})
export class ActivitySignupListComponent {
  activities = [
    {
      name: "Jane Doe",
      tel: '095-0185468',
      informationLink: '#',
      filesLink: '#',
      Contact:'065-4873125',
    },
    {
      name: "John Doe",
      tel: '065-0568745',
      informationLink: '#',
      filesLink: '#',
      Contact:'065-7924779',
    },
    {
      name: "Kathirine Smith",
      tel: '098-9876515',
      informationLink: '#',
      filesLink: '#',
      Contact:'098-6548746',
    },
    {
      name: "Jenny White",
      tel: '095-7561458',
      informationLink: '#',
      filesLink: '#',
      Contact:'095-4687523',
    },
    {
      name: "Frank Jones",
      tel: '065-2549786',
      informationLink: '#',
      filesLink: '#',
      Contact:'065-4987513',
    },
    {
      name: "Rich West",
      tel: '095-3197528',
      informationLink: '#',
      filesLink: '#',
      Contact:'095-7824567',
    },
    {
      name: "Sam Rogers",
      tel: '098-7634549',
      informationLink: '#',
      filesLink: '#',
      Contact:'098-4582136',
    },
    {
      name: "Penny Green",
      tel: '065-6455235',
      informationLink: '#',
      filesLink: '#',
      Contact:'065-9654125',
    },
  ];
}
