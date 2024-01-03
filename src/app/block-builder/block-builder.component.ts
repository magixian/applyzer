import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Block } from '../app.component';

@Component({
  selector: 'app-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.css']
})
export class BlockBuilderComponent implements OnChanges {
  
  @Input()
  blocks: Block[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["block"]) {
      this.blocks = changes["blocks"].currentValue;
    }
  }

}
