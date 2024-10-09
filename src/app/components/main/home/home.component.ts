import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

randomTitle: string = ""
randomPost: string = ""

  ngOnInit() {
    fetch("db.json").then(chiamata => {
      if (!chiamata.ok) {
        throw new Error("Chiamata fallita")
      } return chiamata.json()
    }).then(data => {
      console.log(data);
      let casualPost: number = Math.floor(Math.random() * data.posts.length)
this.randomTitle = data.posts[casualPost].title
this.randomPost = data.posts[casualPost].body




    }).catch(err => {
      console.log("ERRORE: " + err);

    })
  }

}
