import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts: Post[] = [
    {
      title: 'My Trip to Hawaii',
      postDate: new Date('2022-01-01'),
      from: 'New York',
      to: 'Honolulu',
      departureDate: new Date('2022-02-01'),
      returnDate: new Date('2022-02-08'),
      image: 'https://picsum.photos/id/237/400/300',
    },
    {
      title: 'Exploring Europe',
      postDate: new Date('2022-03-01'),
      from: 'New York',
      to: 'Paris',
      departureDate: new Date('2022-04-01'),
      returnDate: new Date('2022-04-08'),
      image: 'https://picsum.photos/id/238/400/300',
    },
    {
      title: 'Safari Adventure',
      postDate: new Date('2022-05-01'),
      from: 'New York',
      to: 'Cape Town',
      departureDate: new Date('2022-06-01'),
      returnDate: new Date('2022-06-08'),
      image: 'https://picsum.photos/id/239/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    },
    {
      title: 'Beach Getaway',
      postDate: new Date('2022-07-01'),
      from: 'New York',
      to: 'Phuket',
      departureDate: new Date('2022-08-01'),
      returnDate: new Date('2022-08-08'),
      image: 'https://picsum.photos/id/240/400/300',
    }
  ];


}

