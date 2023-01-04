import { Component } from '@angular/core';
import { UserspostsService } from '../../services/usersposts.service';

@Component({
  selector: 'app-djangoapitest',
  templateUrl: './djangoapitest.component.html',
  styleUrls: ['./djangoapitest.component.css'],
})
export class DjangoapitestComponent {
  djapidata: any;

  constructor(private userspostsService: UserspostsService) {}

  ngOnInit(): void {
    this.userspostsService.djapidata().subscribe((data) => {
      this.djapidata = data;
    });
  }

  getFormData(data: any) {
    this.userspostsService.djapidatapost(data).subscribe((result) => {
      console.log(result);
    });
  }
}
