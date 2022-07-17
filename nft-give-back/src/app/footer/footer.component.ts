import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
