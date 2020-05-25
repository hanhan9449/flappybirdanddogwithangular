import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RenderService } from './render.service';

@Component({
  selector: 'app-flappybirdanddog',
  templateUrl: './flappybirdanddog.component.html',
  styleUrls: ['./flappybirdanddog.component.css']
})
export class FlappybirdanddogComponent implements OnInit, AfterViewInit {
  @ViewChild('flappy', {static: true}) canvas: ElementRef<HTMLCanvasElement>
  constructor(private renderService: RenderService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderService.renderCanvas(this.canvas)
  }

}