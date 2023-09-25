import { Pipe, PipeTransform } from '@angular/core';
const { isArray } = Array;

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(feeds: any[] | undefined, find: string): any[] {
    if(!feeds) return [];
    if(!find) return feeds;
    find = find.toLowerCase();
    return search( feeds, find);
   }

}

function search(entries: any[], search: string) {

  return entries.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
}
