import { Component } from '@angular/core';

@Component({
  selector: 'app-wurm-test',
  templateUrl: 'wurm-test.page.html',
  styleUrls: ['wurm-test.page.scss']
})
export class WurmTestPage {
  public isMenuOpen: any = {};

  items = [
    {
      title: 'Probenbox aktiviert',
      card: false,
      iconColor: '#32a7b5',
      content:
        'Du hast die Probenbox <Box ID> erfolgreich aktiviert und mit <Pet name> verknupft. In unserem Labor werden wir <Pet name> auf <wurm 1> und <wurm 2> testen.',
      icon: 'checkmark'
    },
    {
      title:
        'Bevor du die Probenbox zu uns ins Labor schicken kannst, musst du folgendes tun:',
      card: false,
      iconColor: '#ff4162',
      content:
        'Sammele drei Proben an drei aufeinanderfolgenden Tagen und achte darauf, dass jede Probe mindestens walnussgroB ist.',
      icon: 'star'
    },
    {
      title: 'Courgette daikon',
      card: true,
      iconColor: '#32a7b5',
      content:
        'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'menu'
    },
    {
      title: 'Courgette daikon',
      card: true,
      iconColor: '#32a7b5',
      content:
        'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'menu'
    }
  ];


  constructor() {}

  public toggleAccordion(index): void {
    this.isMenuOpen[index] = !this.isMenuOpen[index];
  }

}
