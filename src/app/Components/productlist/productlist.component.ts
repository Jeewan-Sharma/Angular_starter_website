import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserspostsService } from '../../services/usersposts.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  clientsideuserspost: any;
  url: any;
  pagecount: any;

  // pagination
  page: number = 1;
  // collectionSize: number = Object.keys(this.clientsideuserspost).length;

  constructor(
    private userspostsService: UserspostsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userspostsService.posts().subscribe((data) => {
      this.clientsideuserspost = data;
      this.pagecount = Object.keys(this.clientsideuserspost).length;
    });
  }
  getClientUserPostDetails(post: any) {
    let url: any = 'product/' + post.id;
    this.route.navigateByUrl(url);
  }
}
