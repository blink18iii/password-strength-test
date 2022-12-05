import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnInit {
  easyColor: string = 'grey';
  mediumColor: string = 'grey';
  strongColor: string = 'grey';
  @ViewChild('input') inputElement: ElementRef;
  constructor() {}

  ngOnInit(): void {
    this.inputElement.nativeElement.addEventListener('touchstart', () => {
      // Get the container element
      const container = this.inputElement.nativeElement.parentElement;

      // Scale the container to fullscreen
      container.style.width = '100%';
      container.style.height = '100%';
    });
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;

    const easyPassword = /^[a-z]+$|^\d+$|^[@$!%*#?&]+$/i;
    const mediumPassword = /^[a-z\d]+$|^[\d@$!%*#?&]+$|^[a-z@$!%*#?&]+$/i;
    const strongPassword = /^[A-Za-z\d@$!%*#?&]+$/i;

    if (inputLength === 0) {
      this.easyColor = 'grey';
      this.mediumColor = 'grey';
      this.strongColor = 'grey';
    } else if (inputLength < 8) {
      this.easyColor = 'red';
      this.mediumColor = 'red';
      this.strongColor = 'red';
    } else if (inputValue.match(easyPassword)) {
      this.easyColor = 'red';
      this.mediumColor = 'grey';
      this.strongColor = 'grey';
    } else if (inputValue.match(mediumPassword)) {
      this.easyColor = 'yellow';
      this.mediumColor = 'yellow';
      this.strongColor = 'grey';
    } else if (inputValue.match(strongPassword)) {
      this.easyColor = 'lime';
      this.mediumColor = 'lime';
      this.strongColor = 'lime';
    }
  }
}
