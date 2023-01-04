import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserspostsService } from '../../services/usersposts.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  id: any;
  clientsideuserspostdetails: any;
  constructor(
    private getpostdetailbyid: UserspostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getpostdetailbyid
      .getPostDetailById(this.id)
      .subscribe((data) => (this.clientsideuserspostdetails = data));
  }
}
