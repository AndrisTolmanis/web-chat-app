import { format } from "date-fns";

export function formatDate(value: number | Date){
  let date: Date;
  
  if (value instanceof Date){
    date = value;
  } else {
    date = new Date(`${value}`.substring(0, 9));
  }


  return format(date, 'MM-dd-yyyy');
}