import { test } from './test';
import { TicketType } from './getTicketTypeByNum';
import { ticketPrice } from './getTicketPriceByTicketTypeNum';

/*
重複使用的工具：
*/

// 測試專用
export const useTest = test;

/*
訂票系統
*/

// 輸入 票型數字 1 , 2 , 3 , 4  會轉換成 全票 / 學生票 / 兒童票 / 優待票
export const getTicketType = TicketType;

//輸入 票型數字 1 , 2 , 3 , 4  會轉換成  票型的價格 500 / 400 / 250 / 200
export const getTicketPrice = ticketPrice;
