import { StaticSymbolResolver } from '@angular/compiler';
import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('content') content: any;
  @ViewChild('target') private myScrollContainer!: ElementRef;

  title = 'Teddy KGB\'s A League Recap - Week 12';
  
  showGame1 = false;
  showGame2 = false;
  showGame3 = false;
  showGame4 = false;
  showGame5 = false;

  show1A = false;
  show1B = false;
  show1C = false;
  show1D = false;

  show2A = false;
  show2B = false;
  show2C = false;
  show2D = false;

  show3A = false;
  show3B = false;
  show3C = false;
  show3D = false;

  show4A = false;
  show4B = false;
  show4C = false;
  show4D = false;

  show5A = false;
  show5B = false;
  show5C = false;
  show5D = false;

  scrollToElement(el:any): void {
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  hideAllGames() {
    this.showGame1 = false;
    this.showGame2 = false;
    this.showGame3 = false;
    this.showGame4 = false;
    this.showGame5 = false;
  }

  hideAllOptions() {
    this.show1A = false;
    this.show1B = false;
    this.show1C = false;
    this.show1D = false;

    this.show2A = false;
    this.show2B = false;
    this.show2C = false;
    this.show2D = false;

    this.show3A = false;
    this.show3B = false;
    this.show3C = false;
    this.show3D = false;

    this.show4A = false;
    this.show4B = false;
    this.show4C = false;
    this.show4D = false;

    this.show5A = false;
    this.show5B = false;
    this.show5C = false;
    this.show5D = false;
  }

  startOver() {
    this.hideAllOptions();
    this.hideAllGames();
  }

  showGame(gameId: string) {
    this.hideAllOptions();
    this.hideAllGames();

    if(gameId == '1') {
      this.showGame1 = true;
    }
    if(gameId == '2') {
      this.showGame2 = true;
    }
    if(gameId == '3') {
      this.showGame3 = true;
    }
    if(gameId == '4') {
      this.showGame4 = true;
    }
    if(gameId == '5') {
      this.showGame5 = true;
    }
  }

  showGameOption(gameId: string, optionId: string) {
    this.hideAllOptions();
    if(gameId == '1') {
      if(optionId == 'A') {
        this.show1A = true;
      }
      if(optionId == 'B') {
        this.show1B = true;
      }
      if(optionId == 'C') {
        this.show1C = true;
      }
      if(optionId == 'D') {
        this.show1D = true;
      }
    }

    if(gameId == '2') {
      if(optionId == 'A') {
        this.show2A = true;
      }
      if(optionId == 'B') {
        this.show2B = true;
      }
      if(optionId == 'C') {
        this.show2C = true;
      }
      if(optionId == 'D') {
        this.show2D = true;
      }
    }

    if(gameId == '3') {
      if(optionId == 'A') {
        this.show3A = true;
      }
      if(optionId == 'B') {
        this.show3B = true;
      }
      if(optionId == 'C') {
        this.show3C = true;
      }
      if(optionId == 'D') {
        this.show3D = true;
      }
    }

    if(gameId == '4') {
      if(optionId == 'A') {
        this.show4A = true;
      }
      if(optionId == 'B') {
        this.show4B = true;
      }
      if(optionId == 'C') {
        this.show4C = true;
      }
      if(optionId == 'D') {
        this.show4D = true;
      }
    }

    if(gameId == '5') {
      if(optionId == 'A') {
        this.show5A = true;
      }
      if(optionId == 'B') {
        this.show5B = true;
      }
      if(optionId == 'C') {
        this.show5C = true;
      }
      if(optionId == 'D') {
        this.show5D = true;
      }
    }
  }


  scrollToBottom() {
      console.log("scrolling to bottom");
      /*window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);*/
    
    try {
      this.content.nativeElement.scrollBottom = this.content.nativeElement.scrollHeight;
    } catch (err) {}
  }
}