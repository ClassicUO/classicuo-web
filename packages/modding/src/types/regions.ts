import { z } from 'zod';

export enum Region {
  EU = 'EU',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AR = 'AR',
  AT = 'AT',
  AU = 'AU',
  AZ = 'AZ',
  BA = 'BA',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BO = 'BO',
  BR = 'BR',
  BZ = 'BZ',
  CA = 'CA',
  CD = 'CD',
  CF = 'CF',
  CH = 'CH',
  CI = 'CI',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CW = 'CW',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DK = 'DK',
  DO = 'DO',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GE = 'GE',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GR = 'GR',
  GT = 'GT',
  GY = 'GY',
  HK = 'HK',
  HN = 'HN',
  HR = 'HR',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IN = 'IN',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KR = 'KR',
  KW = 'KW',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LK = 'LK',
  LR = 'LR',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MD = 'MD',
  ME = 'ME',
  MG = 'MG',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MR = 'MR',
  MT = 'MT',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NE = 'NE',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NZ = 'NZ',
  PE = 'PE',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  QA = 'QA',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SI = 'SI',
  SK = 'SK',
  SN = 'SN',
  SS = 'SS',
  SV = 'SV',
  TD = 'TD',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TL = 'TL',
  TM = 'TM',
  TR = 'TR',
  TT = 'TT',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  US = 'US',
  UZ = 'UZ',
  VE = 'VE',
  VM = 'VM',
  XK = 'XK',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}
export const regionSchema = z.nativeEnum(Region);