import { timeFormat } from 'd3-time-format';
export function formatDateWithYear(t: Date): string {
    return timeFormat("%b %d '%y")(t)
}
export function formatDate(t: Date): string  {
    return timeFormat("%b %d")(t)
}