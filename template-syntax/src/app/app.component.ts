import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'template-syntax';

  public image = 'https://picsum.photos/200/300';
  public isSpecial = true;
  public name;
  public help = 'help';

  public onClick() {
    alert('click');
  }
}
