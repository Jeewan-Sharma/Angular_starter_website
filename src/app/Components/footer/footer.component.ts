import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  facebook = faFacebook;
  instagram = faInstagram;
  twitter = faTwitter;
  linkdin = faLinkedin;
  youtube = faYoutube;
}
