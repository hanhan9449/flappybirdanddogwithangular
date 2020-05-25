import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class RenderService {

  constructor() { }
  renderCanvas(canvas: ElementRef<HTMLCanvasElement>): void {
      const ctx = canvas.nativeElement.getContext('2d')
      ctx.fillRect(0, 0, 150, 150)
  }
}