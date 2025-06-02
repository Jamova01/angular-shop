import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date): string {
    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor(now.getTime() - date.getTime());

    if (isNaN(seconds) || seconds < 0) {
      return 'Invalid date';
    }

    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (const [unit, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count > 0) {
        return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  }
}
