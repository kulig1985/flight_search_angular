import { Pipe, PipeTransform } from '@angular/core';
import { FeedModel } from 'src/app/model/feed-model';
const { isArray } = Array;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(feeds: FeedModel[], find: string): FeedModel[] {
    if(!feeds) return [];
    if(!find) return feeds;
    find = find.toLowerCase();
    return search( feeds, find);
   }
}

function search(entries: any[], search: string) {

  search = search.toLowerCase();

  return entries.filter(function (obj) {
    const keys: string[] = Object.keys(obj);
    return keys.some(function (key) {
      const value = obj[key];
      if (isArray(value)) {
        return value.some(v => {
          return v.toLowerCase().includes(search);
        });
      }
      else if (!isArray(value)) {
        return value.toLowerCase().includes(search);
      }
    })
  });
}