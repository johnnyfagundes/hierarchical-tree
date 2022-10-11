import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() nodes: any;
  @Input() node: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.nodes)
    // console.log(this.node)
  }

}
