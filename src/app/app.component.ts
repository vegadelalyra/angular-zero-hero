import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { PostComponent } from './post/post.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  /* string interpolation == {{}} */
  msg: string = 'Message From TypeScript Component File'

  /* two way data binding */
  userName: string = ''
  onKeyUP() {
    console.log(this.userName)
  }

  /* binding data */
  imgUrl: string = 'https://www.creativefabrica.com/wp-content/uploads/2021/01/30/Three-Color-Kitten-Domestic-Cat-Graphics-8197699-1-1-580x387.jpg'
 /* class binding */ 
   bool:boolean = true
 /* event binding */ 
  buttonClick(): void {
  console.log('Button Click Event worked')
 }
 /* event filtering */
 onKeyUp_old($event: KeyboardEvent): void {
  console.log($event.keyCode)

  if ($event.keyCode == 13)
    console.log('Enter Key Pressed')
 }

 onKeyUp() { console.log('ANGULAR: Enter Key Pressed!') }

 /* Template Variables */
 onKeyup(username: string): void {
  console.log(username)
 }

  /* components */
  title = 'AngIntro'
  parentMessage:string = 'Message changed'
  message:string = ''
  fromChildOutput:string = ''

  @ViewChild(PostComponent) childComp: any = {}

  ngAfterViewInit(): void {
    console.log(this.childComp)
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event
  }
}

