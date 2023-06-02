import { test } from './test';
import { TicketType } from './getTicketTypeByNum';
import { ticketPrice } from './getTicketPriceByTicketTypeNum';
import { localBookingData } from './getLocalBookingData';
import { ticketTypeToNum } from './getTicketTypeToNum';
import { sessionBookingData } from './getSessionBookingData';
import { transTickSessionToDB } from './transTickSessionToDB';
import { ticketTotalPrice } from './getTicketTotalPrice';
/*
重複使用的工具：
*/

// 測試專用
export const useTest = test;

/*
訂票系統
*/

// 獲得目前 Local 目前的票數
export const getLocalBookingData = localBookingData;

// 獲得目前 Session 目前的票券資料
export const getSessionBookingData = sessionBookingData;

// 輸入 票型數字 1 , 2 , 3 , 4  會轉換成 全票 / 學生票 / 兒童票 / 優待票
export const getTicketType = TicketType;

//輸入 票型數字 1 , 2 , 3 , 4  會轉換成  票型的價格 500 / 400 / 250 / 200
export const getTicketPrice = ticketPrice;

// 將 全票 / 學生票 / 兒童票 / 優待票 轉換成 1 , 2 , 3 , 4
export const getTicketTypeFromNum = ticketTypeToNum;

// 轉換 session成 DB格式：
export const getTransTickSessionToDB = transTickSessionToDB;

// 轉換陣列 成 票錢總金額：
export const getTicketTotalPrice = ticketTotalPrice;
