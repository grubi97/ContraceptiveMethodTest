import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-component',
  templateUrl: './image.component.html',
  styleUrls: ['image.component.css']
})

export class ImageComponent implements OnInit {
  
  imageName:string="";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
   }

  uploadImage(file: FileList) {
    const formData: FormData = new FormData();
    formData.append('file', file.item(0));
    console.log(file.item(0));
    this.http.post('http://localhost:49868//images', formData)
      .subscribe(response => {
        console.log(response);
        let result = JSON.parse(JSON.stringify(response));
        this.imageName = result.value;
      });
  }

  



  
}
