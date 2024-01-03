import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'applyzer';
  counter = 0;
  blocks: Block[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["counter"]) {
      console.log("counter change")
    }
  }
  
  build(color: string) {
    console.log("build", color);
    this.blocks.push({ color: color });
  }
}

export interface Block {
  color: string,
}