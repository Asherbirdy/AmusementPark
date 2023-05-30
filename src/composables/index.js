import { test } from './test';
import { TicketType } from './getTicketTypeByNum';

/*
 重複使用的工具：
*/

// 測試專用
export const useTest = test;

// 輸入 1 , 2 , 3 , 4  會轉換成 全票 / 學生票 / 兒童票 / 優待票
export const getTicketType = TicketType;
