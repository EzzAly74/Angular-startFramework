import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() imageSrc = '';

  test(): void {
    let ax = document.querySelector('#myImage') as HTMLImageElement;
    let bb = document.querySelector('.bb') as HTMLElement;
    ax.src = this.imageSrc;
    bb.classList.remove('d-none');
    bb.style.backgroundColor = 'rgba(0,0,255,0.2)';

    bb.addEventListener('click', () => {
      bb.classList.add('d-none');
    });

    ax.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}
