import { Component, OnInit } from '@angular/core';
import * as LightweightCharts from 'lightweight-charts';
import binanceApiNode, { Binance } from 'binance-api-node';

@Component({
  selector: 'app-heet',
  templateUrl: './heet.component.html',
  styleUrls: ['./heet.component.css']
})
export class HeetComponent implements OnInit {



   binanceClient = binanceApiNode({
    apiKey: '<your-api-key>',
    apiSecret: '<your-api-secret>',
  });

  constructor() { }

  ngOnInit(): void {

    this.binanceClient.ws.depth('ETHUSDT', (depth) => {
      
      console.log(depth);

    });

  }

}
