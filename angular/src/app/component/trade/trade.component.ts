import { Component, OnInit } from '@angular/core';
import { createChart, ColorType, CrosshairMode, LineStyle } from 'lightweight-charts';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  private socket: WebSocketSubject<any> | undefined;
  private chart: any;
  private botSocket: WebSocketSubject<any> | undefined;
  priceLines: any = [];

  openOrders: any = [];
  closedOrders: any = [];

  constructor() { }

  ngOnInit(): void {

    this.chart = createChart(document.getElementById('tradingview-chart')!, {
      width: 1200,
      height: 500,
      layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'white' } },
      grid: {
        vertLines: {
          color: '#404040',
        },

      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        borderColor: '#cccccc',
        timeVisible: true,
      },
      rightPriceScale: {
        borderColor: '#cccccc',
        visible: true,
      },
      leftPriceScale: {
        borderColor: '#cccccc',
        visible: true,
      }

    });

    const candlestickSeries = this.chart.addCandlestickSeries({
      upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
      wickUpColor: '#26a69a', wickDownColor: '#ef5350',
    });


    const url = 'wss://testnet.binance.vision/ws';
    const symbol = 'ethusdt';
    const interval = '1m';
    this.socket = webSocket(`${url}/${symbol}@kline_${interval}`);
    this.socket.subscribe(
      (data: any) => {
        console.log(data);
        //const candle = JSON.parse(data);
        const candle = data.k;
        console.log(candle);
        const chartCandle = {
          time: candle.t / 1000,
          open: parseFloat(candle.o),
          high: parseFloat(candle.h),
          low: parseFloat(candle.l),
          close: parseFloat(candle.c),
        };
        
        candlestickSeries.update(chartCandle);
      }
    );

    const botUrl = 'ws://localhost:9001';
    this.botSocket = webSocket(botUrl);
    this.botSocket.subscribe((data: any) => {

      this.openOrders = [];

      this.priceLines.forEach((priceLine) => {

        candlestickSeries.removePriceLine(priceLine);
        console.log('removed price line: '+ priceLine);

      });
      
      if (data != undefined) {

      data.forEach((order) => {

        if (order.status == 'FILLED') {

          this.closedOrders.push(order);

        }
        else {

          this.openOrders.push(order);

          var priceLine = {
            price: parseFloat(order.price),
            color: order.side == 'BUY' ? '#00ff00' : '#ff0000',
            lineWidth: 2,
            lineStyle: LineStyle.Solid,
            axisLabelVisible: true,
            title: order.side
        };
  
          var line = candlestickSeries.createPriceLine(priceLine);
          this.priceLines.push(line);

        }
      })
    
    
    }});

}


}
