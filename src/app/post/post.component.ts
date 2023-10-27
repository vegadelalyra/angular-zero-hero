import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  title:string = 'List of Posts'
  messagePost: string =  'Message Post'

  postParentMessage:string = 'Message coming from the post parent' 

  childMessage:string = 'From Child Component'

  outputChildMessage:string = 'Message from Child Component via Output'

  @Input() fromParent:string = ''

  @Output() messageEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage)
  }
}
