import { Album } from './../album';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _produtctService: ProductService) { }

  ngOnInit() {
    this._produtctService.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

  

}
