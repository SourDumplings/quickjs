// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Other_Letter`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000AA,
    0x0000BA,
    0x0001BB,
    0x000294,
    0x0006D5,
    0x0006FF,
    0x000710,
    0x0007B1,
    0x00093D,
    0x000950,
    0x0009B2,
    0x0009BD,
    0x0009CE,
    0x0009FC,
    0x000A5E,
    0x000ABD,
    0x000AD0,
    0x000AF9,
    0x000B3D,
    0x000B71,
    0x000B83,
    0x000B9C,
    0x000BD0,
    0x000C3D,
    0x000C5D,
    0x000C80,
    0x000CBD,
    0x000D3D,
    0x000D4E,
    0x000DBD,
    0x000E84,
    0x000EA5,
    0x000EBD,
    0x000F00,
    0x00103F,
    0x001061,
    0x00108E,
    0x001258,
    0x0012C0,
    0x0017DC,
    0x0018AA,
    0x001CFA,
    0x003006,
    0x00303C,
    0x00309F,
    0x0030FF,
    0x00A66E,
    0x00A78F,
    0x00A7F7,
    0x00A8FB,
    0x00AA7A,
    0x00AAB1,
    0x00AAC0,
    0x00AAC2,
    0x00AAF2,
    0x00FB1D,
    0x00FB3E,
    0x010808,
    0x01083C,
    0x010A00,
    0x010D4F,
    0x010F27,
    0x011075,
    0x011144,
    0x011147,
    0x011176,
    0x0111DA,
    0x0111DC,
    0x011288,
    0x01133D,
    0x011350,
    0x01138B,
    0x01138E,
    0x0113B7,
    0x0113D1,
    0x0113D3,
    0x0114C7,
    0x011644,
    0x0116B8,
    0x011909,
    0x01193F,
    0x011941,
    0x0119E1,
    0x0119E3,
    0x011A00,
    0x011A3A,
    0x011A50,
    0x011A9D,
    0x011C40,
    0x011D46,
    0x011D98,
    0x011F02,
    0x011FB0,
    0x016F50,
    0x01B132,
    0x01B155,
    0x01DF0A,
    0x01E14E,
    0x01E5F0,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E
  ],
  ranges: [
    [0x0001C0, 0x0001C3],
    [0x0005D0, 0x0005EA],
    [0x0005EF, 0x0005F2],
    [0x000620, 0x00063F],
    [0x000641, 0x00064A],
    [0x00066E, 0x00066F],
    [0x000671, 0x0006D3],
    [0x0006EE, 0x0006EF],
    [0x0006FA, 0x0006FC],
    [0x000712, 0x00072F],
    [0x00074D, 0x0007A5],
    [0x0007CA, 0x0007EA],
    [0x000800, 0x000815],
    [0x000840, 0x000858],
    [0x000860, 0x00086A],
    [0x000870, 0x000887],
    [0x000889, 0x00088E],
    [0x0008A0, 0x0008C8],
    [0x000904, 0x000939],
    [0x000958, 0x000961],
    [0x000972, 0x000980],
    [0x000985, 0x00098C],
    [0x00098F, 0x000990],
    [0x000993, 0x0009A8],
    [0x0009AA, 0x0009B0],
    [0x0009B6, 0x0009B9],
    [0x0009DC, 0x0009DD],
    [0x0009DF, 0x0009E1],
    [0x0009F0, 0x0009F1],
    [0x000A05, 0x000A0A],
    [0x000A0F, 0x000A10],
    [0x000A13, 0x000A28],
    [0x000A2A, 0x000A30],
    [0x000A32, 0x000A33],
    [0x000A35, 0x000A36],
    [0x000A38, 0x000A39],
    [0x000A59, 0x000A5C],
    [0x000A72, 0x000A74],
    [0x000A85, 0x000A8D],
    [0x000A8F, 0x000A91],
    [0x000A93, 0x000AA8],
    [0x000AAA, 0x000AB0],
    [0x000AB2, 0x000AB3],
    [0x000AB5, 0x000AB9],
    [0x000AE0, 0x000AE1],
    [0x000B05, 0x000B0C],
    [0x000B0F, 0x000B10],
    [0x000B13, 0x000B28],
    [0x000B2A, 0x000B30],
    [0x000B32, 0x000B33],
    [0x000B35, 0x000B39],
    [0x000B5C, 0x000B5D],
    [0x000B5F, 0x000B61],
    [0x000B85, 0x000B8A],
    [0x000B8E, 0x000B90],
    [0x000B92, 0x000B95],
    [0x000B99, 0x000B9A],
    [0x000B9E, 0x000B9F],
    [0x000BA3, 0x000BA4],
    [0x000BA8, 0x000BAA],
    [0x000BAE, 0x000BB9],
    [0x000C05, 0x000C0C],
    [0x000C0E, 0x000C10],
    [0x000C12, 0x000C28],
    [0x000C2A, 0x000C39],
    [0x000C58, 0x000C5A],
    [0x000C60, 0x000C61],
    [0x000C85, 0x000C8C],
    [0x000C8E, 0x000C90],
    [0x000C92, 0x000CA8],
    [0x000CAA, 0x000CB3],
    [0x000CB5, 0x000CB9],
    [0x000CDD, 0x000CDE],
    [0x000CE0, 0x000CE1],
    [0x000CF1, 0x000CF2],
    [0x000D04, 0x000D0C],
    [0x000D0E, 0x000D10],
    [0x000D12, 0x000D3A],
    [0x000D54, 0x000D56],
    [0x000D5F, 0x000D61],
    [0x000D7A, 0x000D7F],
    [0x000D85, 0x000D96],
    [0x000D9A, 0x000DB1],
    [0x000DB3, 0x000DBB],
    [0x000DC0, 0x000DC6],
    [0x000E01, 0x000E30],
    [0x000E32, 0x000E33],
    [0x000E40, 0x000E45],
    [0x000E81, 0x000E82],
    [0x000E86, 0x000E8A],
    [0x000E8C, 0x000EA3],
    [0x000EA7, 0x000EB0],
    [0x000EB2, 0x000EB3],
    [0x000EC0, 0x000EC4],
    [0x000EDC, 0x000EDF],
    [0x000F40, 0x000F47],
    [0x000F49, 0x000F6C],
    [0x000F88, 0x000F8C],
    [0x001000, 0x00102A],
    [0x001050, 0x001055],
    [0x00105A, 0x00105D],
    [0x001065, 0x001066],
    [0x00106E, 0x001070],
    [0x001075, 0x001081],
    [0x001100, 0x001248],
    [0x00124A, 0x00124D],
    [0x001250, 0x001256],
    [0x00125A, 0x00125D],
    [0x001260, 0x001288],
    [0x00128A, 0x00128D],
    [0x001290, 0x0012B0],
    [0x0012B2, 0x0012B5],
    [0x0012B8, 0x0012BE],
    [0x0012C2, 0x0012C5],
    [0x0012C8, 0x0012D6],
    [0x0012D8, 0x001310],
    [0x001312, 0x001315],
    [0x001318, 0x00135A],
    [0x001380, 0x00138F],
    [0x001401, 0x00166C],
    [0x00166F, 0x00167F],
    [0x001681, 0x00169A],
    [0x0016A0, 0x0016EA],
    [0x0016F1, 0x0016F8],
    [0x001700, 0x001711],
    [0x00171F, 0x001731],
    [0x001740, 0x001751],
    [0x001760, 0x00176C],
    [0x00176E, 0x001770],
    [0x001780, 0x0017B3],
    [0x001820, 0x001842],
    [0x001844, 0x001878],
    [0x001880, 0x001884],
    [0x001887, 0x0018A8],
    [0x0018B0, 0x0018F5],
    [0x001900, 0x00191E],
    [0x001950, 0x00196D],
    [0x001970, 0x001974],
    [0x001980, 0x0019AB],
    [0x0019B0, 0x0019C9],
    [0x001A00, 0x001A16],
    [0x001A20, 0x001A54],
    [0x001B05, 0x001B33],
    [0x001B45, 0x001B4C],
    [0x001B83, 0x001BA0],
    [0x001BAE, 0x001BAF],
    [0x001BBA, 0x001BE5],
    [0x001C00, 0x001C23],
    [0x001C4D, 0x001C4F],
    [0x001C5A, 0x001C77],
    [0x001CE9, 0x001CEC],
    [0x001CEE, 0x001CF3],
    [0x001CF5, 0x001CF6],
    [0x002135, 0x002138],
    [0x002D30, 0x002D67],
    [0x002D80, 0x002D96],
    [0x002DA0, 0x002DA6],
    [0x002DA8, 0x002DAE],
    [0x002DB0, 0x002DB6],
    [0x002DB8, 0x002DBE],
    [0x002DC0, 0x002DC6],
    [0x002DC8, 0x002DCE],
    [0x002DD0, 0x002DD6],
    [0x002DD8, 0x002DDE],
    [0x003041, 0x003096],
    [0x0030A1, 0x0030FA],
    [0x003105, 0x00312F],
    [0x003131, 0x00318E],
    [0x0031A0, 0x0031BF],
    [0x0031F0, 0x0031FF],
    [0x003400, 0x004DBF],
    [0x004E00, 0x00A014],
    [0x00A016, 0x00A48C],
    [0x00A4D0, 0x00A4F7],
    [0x00A500, 0x00A60B],
    [0x00A610, 0x00A61F],
    [0x00A62A, 0x00A62B],
    [0x00A6A0, 0x00A6E5],
    [0x00A7FB, 0x00A801],
    [0x00A803, 0x00A805],
    [0x00A807, 0x00A80A],
    [0x00A80C, 0x00A822],
    [0x00A840, 0x00A873],
    [0x00A882, 0x00A8B3],
    [0x00A8F2, 0x00A8F7],
    [0x00A8FD, 0x00A8FE],
    [0x00A90A, 0x00A925],
    [0x00A930, 0x00A946],
    [0x00A960, 0x00A97C],
    [0x00A984, 0x00A9B2],
    [0x00A9E0, 0x00A9E4],
    [0x00A9E7, 0x00A9EF],
    [0x00A9FA, 0x00A9FE],
    [0x00AA00, 0x00AA28],
    [0x00AA40, 0x00AA42],
    [0x00AA44, 0x00AA4B],
    [0x00AA60, 0x00AA6F],
    [0x00AA71, 0x00AA76],
    [0x00AA7E, 0x00AAAF],
    [0x00AAB5, 0x00AAB6],
    [0x00AAB9, 0x00AABD],
    [0x00AADB, 0x00AADC],
    [0x00AAE0, 0x00AAEA],
    [0x00AB01, 0x00AB06],
    [0x00AB09, 0x00AB0E],
    [0x00AB11, 0x00AB16],
    [0x00AB20, 0x00AB26],
    [0x00AB28, 0x00AB2E],
    [0x00ABC0, 0x00ABE2],
    [0x00AC00, 0x00D7A3],
    [0x00D7B0, 0x00D7C6],
    [0x00D7CB, 0x00D7FB],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FB1F, 0x00FB28],
    [0x00FB2A, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FBB1],
    [0x00FBD3, 0x00FD3D],
    [0x00FD50, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFB],
    [0x00FE70, 0x00FE74],
    [0x00FE76, 0x00FEFC],
    [0x00FF66, 0x00FF6F],
    [0x00FF71, 0x00FF9D],
    [0x00FFA0, 0x00FFBE],
    [0x00FFC2, 0x00FFC7],
    [0x00FFCA, 0x00FFCF],
    [0x00FFD2, 0x00FFD7],
    [0x00FFDA, 0x00FFDC],
    [0x010000, 0x01000B],
    [0x01000D, 0x010026],
    [0x010028, 0x01003A],
    [0x01003C, 0x01003D],
    [0x01003F, 0x01004D],
    [0x010050, 0x01005D],
    [0x010080, 0x0100FA],
    [0x010280, 0x01029C],
    [0x0102A0, 0x0102D0],
    [0x010300, 0x01031F],
    [0x01032D, 0x010340],
    [0x010342, 0x010349],
    [0x010350, 0x010375],
    [0x010380, 0x01039D],
    [0x0103A0, 0x0103C3],
    [0x0103C8, 0x0103CF],
    [0x010450, 0x01049D],
    [0x010500, 0x010527],
    [0x010530, 0x010563],
    [0x0105C0, 0x0105F3],
    [0x010600, 0x010736],
    [0x010740, 0x010755],
    [0x010760, 0x010767],
    [0x010800, 0x010805],
    [0x01080A, 0x010835],
    [0x010837, 0x010838],
    [0x01083F, 0x010855],
    [0x010860, 0x010876],
    [0x010880, 0x01089E],
    [0x0108E0, 0x0108F2],
    [0x0108F4, 0x0108F5],
    [0x010900, 0x010915],
    [0x010920, 0x010939],
    [0x010980, 0x0109B7],
    [0x0109BE, 0x0109BF],
    [0x010A10, 0x010A13],
    [0x010A15, 0x010A17],
    [0x010A19, 0x010A35],
    [0x010A60, 0x010A7C],
    [0x010A80, 0x010A9C],
    [0x010AC0, 0x010AC7],
    [0x010AC9, 0x010AE4],
    [0x010B00, 0x010B35],
    [0x010B40, 0x010B55],
    [0x010B60, 0x010B72],
    [0x010B80, 0x010B91],
    [0x010C00, 0x010C48],
    [0x010D00, 0x010D23],
    [0x010D4A, 0x010D4D],
    [0x010E80, 0x010EA9],
    [0x010EB0, 0x010EB1],
    [0x010EC2, 0x010EC4],
    [0x010F00, 0x010F1C],
    [0x010F30, 0x010F45],
    [0x010F70, 0x010F81],
    [0x010FB0, 0x010FC4],
    [0x010FE0, 0x010FF6],
    [0x011003, 0x011037],
    [0x011071, 0x011072],
    [0x011083, 0x0110AF],
    [0x0110D0, 0x0110E8],
    [0x011103, 0x011126],
    [0x011150, 0x011172],
    [0x011183, 0x0111B2],
    [0x0111C1, 0x0111C4],
    [0x011200, 0x011211],
    [0x011213, 0x01122B],
    [0x01123F, 0x011240],
    [0x011280, 0x011286],
    [0x01128A, 0x01128D],
    [0x01128F, 0x01129D],
    [0x01129F, 0x0112A8],
    [0x0112B0, 0x0112DE],
    [0x011305, 0x01130C],
    [0x01130F, 0x011310],
    [0x011313, 0x011328],
    [0x01132A, 0x011330],
    [0x011332, 0x011333],
    [0x011335, 0x011339],
    [0x01135D, 0x011361],
    [0x011380, 0x011389],
    [0x011390, 0x0113B5],
    [0x011400, 0x011434],
    [0x011447, 0x01144A],
    [0x01145F, 0x011461],
    [0x011480, 0x0114AF],
    [0x0114C4, 0x0114C5],
    [0x011580, 0x0115AE],
    [0x0115D8, 0x0115DB],
    [0x011600, 0x01162F],
    [0x011680, 0x0116AA],
    [0x011700, 0x01171A],
    [0x011740, 0x011746],
    [0x011800, 0x01182B],
    [0x0118FF, 0x011906],
    [0x01190C, 0x011913],
    [0x011915, 0x011916],
    [0x011918, 0x01192F],
    [0x0119A0, 0x0119A7],
    [0x0119AA, 0x0119D0],
    [0x011A0B, 0x011A32],
    [0x011A5C, 0x011A89],
    [0x011AB0, 0x011AF8],
    [0x011BC0, 0x011BE0],
    [0x011C00, 0x011C08],
    [0x011C0A, 0x011C2E],
    [0x011C72, 0x011C8F],
    [0x011D00, 0x011D06],
    [0x011D08, 0x011D09],
    [0x011D0B, 0x011D30],
    [0x011D60, 0x011D65],
    [0x011D67, 0x011D68],
    [0x011D6A, 0x011D89],
    [0x011EE0, 0x011EF2],
    [0x011F04, 0x011F10],
    [0x011F12, 0x011F33],
    [0x012000, 0x012399],
    [0x012480, 0x012543],
    [0x012F90, 0x012FF0],
    [0x013000, 0x01342F],
    [0x013441, 0x013446],
    [0x013460, 0x0143FA],
    [0x014400, 0x014646],
    [0x016100, 0x01611D],
    [0x016800, 0x016A38],
    [0x016A40, 0x016A5E],
    [0x016A70, 0x016ABE],
    [0x016AD0, 0x016AED],
    [0x016B00, 0x016B2F],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F],
    [0x016D43, 0x016D6A],
    [0x016F00, 0x016F4A],
    [0x017000, 0x0187F7],
    [0x018800, 0x018CD5],
    [0x018CFF, 0x018D08],
    [0x01B000, 0x01B122],
    [0x01B150, 0x01B152],
    [0x01B164, 0x01B167],
    [0x01B170, 0x01B2FB],
    [0x01BC00, 0x01BC6A],
    [0x01BC70, 0x01BC7C],
    [0x01BC80, 0x01BC88],
    [0x01BC90, 0x01BC99],
    [0x01E100, 0x01E12C],
    [0x01E290, 0x01E2AD],
    [0x01E2C0, 0x01E2EB],
    [0x01E4D0, 0x01E4EA],
    [0x01E5D0, 0x01E5ED],
    [0x01E7E0, 0x01E7E6],
    [0x01E7E8, 0x01E7EB],
    [0x01E7ED, 0x01E7EE],
    [0x01E7F0, 0x01E7FE],
    [0x01E800, 0x01E8C4],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x020000, 0x02A6DF],
    [0x02A700, 0x02B739],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02EBF0, 0x02EE5D],
    [0x02F800, 0x02FA1D],
    [0x030000, 0x03134A],
    [0x031350, 0x0323AF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Other_Letter}+$/u,
  matchSymbols,
  "\\p{General_Category=Other_Letter}"
);
testPropertyEscapes(
  /^\p{General_Category=Lo}+$/u,
  matchSymbols,
  "\\p{General_Category=Lo}"
);
testPropertyEscapes(
  /^\p{gc=Other_Letter}+$/u,
  matchSymbols,
  "\\p{gc=Other_Letter}"
);
testPropertyEscapes(
  /^\p{gc=Lo}+$/u,
  matchSymbols,
  "\\p{gc=Lo}"
);
testPropertyEscapes(
  /^\p{Other_Letter}+$/u,
  matchSymbols,
  "\\p{Other_Letter}"
);
testPropertyEscapes(
  /^\p{Lo}+$/u,
  matchSymbols,
  "\\p{Lo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000640,
    0x000670,
    0x0006D4,
    0x000711,
    0x000888,
    0x0009A9,
    0x0009B1,
    0x0009DE,
    0x000A29,
    0x000A31,
    0x000A34,
    0x000A37,
    0x000A5D,
    0x000A8E,
    0x000A92,
    0x000AA9,
    0x000AB1,
    0x000AB4,
    0x000B29,
    0x000B31,
    0x000B34,
    0x000B5E,
    0x000B84,
    0x000B91,
    0x000B9B,
    0x000B9D,
    0x000C0D,
    0x000C11,
    0x000C29,
    0x000C8D,
    0x000C91,
    0x000CA9,
    0x000CB4,
    0x000CDF,
    0x000D0D,
    0x000D11,
    0x000DB2,
    0x000DBC,
    0x000E31,
    0x000E83,
    0x000E85,
    0x000E8B,
    0x000EA4,
    0x000EA6,
    0x000EB1,
    0x000F48,
    0x001249,
    0x001257,
    0x001259,
    0x001289,
    0x0012B1,
    0x0012BF,
    0x0012C1,
    0x0012D7,
    0x001311,
    0x001680,
    0x00176D,
    0x001843,
    0x0018A9,
    0x001CED,
    0x001CF4,
    0x002DA7,
    0x002DAF,
    0x002DB7,
    0x002DBF,
    0x002DC7,
    0x002DCF,
    0x002DD7,
    0x0030A0,
    0x003130,
    0x00A015,
    0x00A802,
    0x00A806,
    0x00A80B,
    0x00A8FC,
    0x00A9FF,
    0x00AA43,
    0x00AA70,
    0x00AAB0,
    0x00AAC1,
    0x00AB27,
    0x00FB1E,
    0x00FB29,
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45,
    0x00FE75,
    0x00FF70,
    0x01000C,
    0x010027,
    0x01003B,
    0x01003E,
    0x010341,
    0x010809,
    0x010836,
    0x0108F3,
    0x010A14,
    0x010A18,
    0x010AC8,
    0x010D4E,
    0x0111DB,
    0x011212,
    0x011287,
    0x011289,
    0x01128E,
    0x01129E,
    0x011329,
    0x011331,
    0x011334,
    0x01138A,
    0x01138F,
    0x0113B6,
    0x0113D2,
    0x0114C6,
    0x011914,
    0x011917,
    0x011940,
    0x0119E2,
    0x011C09,
    0x011D07,
    0x011D0A,
    0x011D66,
    0x011D69,
    0x011F03,
    0x011F11,
    0x01E7E7,
    0x01E7EC,
    0x01E7EF,
    0x01E7FF,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0000A9],
    [0x0000AB, 0x0000B9],
    [0x0000BB, 0x0001BA],
    [0x0001BC, 0x0001BF],
    [0x0001C4, 0x000293],
    [0x000295, 0x0005CF],
    [0x0005EB, 0x0005EE],
    [0x0005F3, 0x00061F],
    [0x00064B, 0x00066D],
    [0x0006D6, 0x0006ED],
    [0x0006F0, 0x0006F9],
    [0x0006FD, 0x0006FE],
    [0x000700, 0x00070F],
    [0x000730, 0x00074C],
    [0x0007A6, 0x0007B0],
    [0x0007B2, 0x0007C9],
    [0x0007EB, 0x0007FF],
    [0x000816, 0x00083F],
    [0x000859, 0x00085F],
    [0x00086B, 0x00086F],
    [0x00088F, 0x00089F],
    [0x0008C9, 0x000903],
    [0x00093A, 0x00093C],
    [0x00093E, 0x00094F],
    [0x000951, 0x000957],
    [0x000962, 0x000971],
    [0x000981, 0x000984],
    [0x00098D, 0x00098E],
    [0x000991, 0x000992],
    [0x0009B3, 0x0009B5],
    [0x0009BA, 0x0009BC],
    [0x0009BE, 0x0009CD],
    [0x0009CF, 0x0009DB],
    [0x0009E2, 0x0009EF],
    [0x0009F2, 0x0009FB],
    [0x0009FD, 0x000A04],
    [0x000A0B, 0x000A0E],
    [0x000A11, 0x000A12],
    [0x000A3A, 0x000A58],
    [0x000A5F, 0x000A71],
    [0x000A75, 0x000A84],
    [0x000ABA, 0x000ABC],
    [0x000ABE, 0x000ACF],
    [0x000AD1, 0x000ADF],
    [0x000AE2, 0x000AF8],
    [0x000AFA, 0x000B04],
    [0x000B0D, 0x000B0E],
    [0x000B11, 0x000B12],
    [0x000B3A, 0x000B3C],
    [0x000B3E, 0x000B5B],
    [0x000B62, 0x000B70],
    [0x000B72, 0x000B82],
    [0x000B8B, 0x000B8D],
    [0x000B96, 0x000B98],
    [0x000BA0, 0x000BA2],
    [0x000BA5, 0x000BA7],
    [0x000BAB, 0x000BAD],
    [0x000BBA, 0x000BCF],
    [0x000BD1, 0x000C04],
    [0x000C3A, 0x000C3C],
    [0x000C3E, 0x000C57],
    [0x000C5B, 0x000C5C],
    [0x000C5E, 0x000C5F],
    [0x000C62, 0x000C7F],
    [0x000C81, 0x000C84],
    [0x000CBA, 0x000CBC],
    [0x000CBE, 0x000CDC],
    [0x000CE2, 0x000CF0],
    [0x000CF3, 0x000D03],
    [0x000D3B, 0x000D3C],
    [0x000D3E, 0x000D4D],
    [0x000D4F, 0x000D53],
    [0x000D57, 0x000D5E],
    [0x000D62, 0x000D79],
    [0x000D80, 0x000D84],
    [0x000D97, 0x000D99],
    [0x000DBE, 0x000DBF],
    [0x000DC7, 0x000E00],
    [0x000E34, 0x000E3F],
    [0x000E46, 0x000E80],
    [0x000EB4, 0x000EBC],
    [0x000EBE, 0x000EBF],
    [0x000EC5, 0x000EDB],
    [0x000EE0, 0x000EFF],
    [0x000F01, 0x000F3F],
    [0x000F6D, 0x000F87],
    [0x000F8D, 0x000FFF],
    [0x00102B, 0x00103E],
    [0x001040, 0x00104F],
    [0x001056, 0x001059],
    [0x00105E, 0x001060],
    [0x001062, 0x001064],
    [0x001067, 0x00106D],
    [0x001071, 0x001074],
    [0x001082, 0x00108D],
    [0x00108F, 0x0010FF],
    [0x00124E, 0x00124F],
    [0x00125E, 0x00125F],
    [0x00128E, 0x00128F],
    [0x0012B6, 0x0012B7],
    [0x0012C6, 0x0012C7],
    [0x001316, 0x001317],
    [0x00135B, 0x00137F],
    [0x001390, 0x001400],
    [0x00166D, 0x00166E],
    [0x00169B, 0x00169F],
    [0x0016EB, 0x0016F0],
    [0x0016F9, 0x0016FF],
    [0x001712, 0x00171E],
    [0x001732, 0x00173F],
    [0x001752, 0x00175F],
    [0x001771, 0x00177F],
    [0x0017B4, 0x0017DB],
    [0x0017DD, 0x00181F],
    [0x001879, 0x00187F],
    [0x001885, 0x001886],
    [0x0018AB, 0x0018AF],
    [0x0018F6, 0x0018FF],
    [0x00191F, 0x00194F],
    [0x00196E, 0x00196F],
    [0x001975, 0x00197F],
    [0x0019AC, 0x0019AF],
    [0x0019CA, 0x0019FF],
    [0x001A17, 0x001A1F],
    [0x001A55, 0x001B04],
    [0x001B34, 0x001B44],
    [0x001B4D, 0x001B82],
    [0x001BA1, 0x001BAD],
    [0x001BB0, 0x001BB9],
    [0x001BE6, 0x001BFF],
    [0x001C24, 0x001C4C],
    [0x001C50, 0x001C59],
    [0x001C78, 0x001CE8],
    [0x001CF7, 0x001CF9],
    [0x001CFB, 0x002134],
    [0x002139, 0x002D2F],
    [0x002D68, 0x002D7F],
    [0x002D97, 0x002D9F],
    [0x002DDF, 0x003005],
    [0x003007, 0x00303B],
    [0x00303D, 0x003040],
    [0x003097, 0x00309E],
    [0x0030FB, 0x0030FE],
    [0x003100, 0x003104],
    [0x00318F, 0x00319F],
    [0x0031C0, 0x0031EF],
    [0x003200, 0x0033FF],
    [0x004DC0, 0x004DFF],
    [0x00A48D, 0x00A4CF],
    [0x00A4F8, 0x00A4FF],
    [0x00A60C, 0x00A60F],
    [0x00A620, 0x00A629],
    [0x00A62C, 0x00A66D],
    [0x00A66F, 0x00A69F],
    [0x00A6E6, 0x00A78E],
    [0x00A790, 0x00A7F6],
    [0x00A7F8, 0x00A7FA],
    [0x00A823, 0x00A83F],
    [0x00A874, 0x00A881],
    [0x00A8B4, 0x00A8F1],
    [0x00A8F8, 0x00A8FA],
    [0x00A8FF, 0x00A909],
    [0x00A926, 0x00A92F],
    [0x00A947, 0x00A95F],
    [0x00A97D, 0x00A983],
    [0x00A9B3, 0x00A9DF],
    [0x00A9E5, 0x00A9E6],
    [0x00A9F0, 0x00A9F9],
    [0x00AA29, 0x00AA3F],
    [0x00AA4C, 0x00AA5F],
    [0x00AA77, 0x00AA79],
    [0x00AA7B, 0x00AA7D],
    [0x00AAB2, 0x00AAB4],
    [0x00AAB7, 0x00AAB8],
    [0x00AABE, 0x00AABF],
    [0x00AAC3, 0x00AADA],
    [0x00AADD, 0x00AADF],
    [0x00AAEB, 0x00AAF1],
    [0x00AAF3, 0x00AB00],
    [0x00AB07, 0x00AB08],
    [0x00AB0F, 0x00AB10],
    [0x00AB17, 0x00AB1F],
    [0x00AB2F, 0x00ABBF],
    [0x00ABE3, 0x00ABFF],
    [0x00D7A4, 0x00D7AF],
    [0x00D7C7, 0x00D7CA],
    [0x00D7FC, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x00FB1C],
    [0x00FBB2, 0x00FBD2],
    [0x00FD3E, 0x00FD4F],
    [0x00FD90, 0x00FD91],
    [0x00FDC8, 0x00FDEF],
    [0x00FDFC, 0x00FE6F],
    [0x00FEFD, 0x00FF65],
    [0x00FF9E, 0x00FF9F],
    [0x00FFBF, 0x00FFC1],
    [0x00FFC8, 0x00FFC9],
    [0x00FFD0, 0x00FFD1],
    [0x00FFD8, 0x00FFD9],
    [0x00FFDD, 0x00FFFF],
    [0x01004E, 0x01004F],
    [0x01005E, 0x01007F],
    [0x0100FB, 0x01027F],
    [0x01029D, 0x01029F],
    [0x0102D1, 0x0102FF],
    [0x010320, 0x01032C],
    [0x01034A, 0x01034F],
    [0x010376, 0x01037F],
    [0x01039E, 0x01039F],
    [0x0103C4, 0x0103C7],
    [0x0103D0, 0x01044F],
    [0x01049E, 0x0104FF],
    [0x010528, 0x01052F],
    [0x010564, 0x0105BF],
    [0x0105F4, 0x0105FF],
    [0x010737, 0x01073F],
    [0x010756, 0x01075F],
    [0x010768, 0x0107FF],
    [0x010806, 0x010807],
    [0x010839, 0x01083B],
    [0x01083D, 0x01083E],
    [0x010856, 0x01085F],
    [0x010877, 0x01087F],
    [0x01089F, 0x0108DF],
    [0x0108F6, 0x0108FF],
    [0x010916, 0x01091F],
    [0x01093A, 0x01097F],
    [0x0109B8, 0x0109BD],
    [0x0109C0, 0x0109FF],
    [0x010A01, 0x010A0F],
    [0x010A36, 0x010A5F],
    [0x010A7D, 0x010A7F],
    [0x010A9D, 0x010ABF],
    [0x010AE5, 0x010AFF],
    [0x010B36, 0x010B3F],
    [0x010B56, 0x010B5F],
    [0x010B73, 0x010B7F],
    [0x010B92, 0x010BFF],
    [0x010C49, 0x010CFF],
    [0x010D24, 0x010D49],
    [0x010D50, 0x010E7F],
    [0x010EAA, 0x010EAF],
    [0x010EB2, 0x010EC1],
    [0x010EC5, 0x010EFF],
    [0x010F1D, 0x010F26],
    [0x010F28, 0x010F2F],
    [0x010F46, 0x010F6F],
    [0x010F82, 0x010FAF],
    [0x010FC5, 0x010FDF],
    [0x010FF7, 0x011002],
    [0x011038, 0x011070],
    [0x011073, 0x011074],
    [0x011076, 0x011082],
    [0x0110B0, 0x0110CF],
    [0x0110E9, 0x011102],
    [0x011127, 0x011143],
    [0x011145, 0x011146],
    [0x011148, 0x01114F],
    [0x011173, 0x011175],
    [0x011177, 0x011182],
    [0x0111B3, 0x0111C0],
    [0x0111C5, 0x0111D9],
    [0x0111DD, 0x0111FF],
    [0x01122C, 0x01123E],
    [0x011241, 0x01127F],
    [0x0112A9, 0x0112AF],
    [0x0112DF, 0x011304],
    [0x01130D, 0x01130E],
    [0x011311, 0x011312],
    [0x01133A, 0x01133C],
    [0x01133E, 0x01134F],
    [0x011351, 0x01135C],
    [0x011362, 0x01137F],
    [0x01138C, 0x01138D],
    [0x0113B8, 0x0113D0],
    [0x0113D4, 0x0113FF],
    [0x011435, 0x011446],
    [0x01144B, 0x01145E],
    [0x011462, 0x01147F],
    [0x0114B0, 0x0114C3],
    [0x0114C8, 0x01157F],
    [0x0115AF, 0x0115D7],
    [0x0115DC, 0x0115FF],
    [0x011630, 0x011643],
    [0x011645, 0x01167F],
    [0x0116AB, 0x0116B7],
    [0x0116B9, 0x0116FF],
    [0x01171B, 0x01173F],
    [0x011747, 0x0117FF],
    [0x01182C, 0x0118FE],
    [0x011907, 0x011908],
    [0x01190A, 0x01190B],
    [0x011930, 0x01193E],
    [0x011942, 0x01199F],
    [0x0119A8, 0x0119A9],
    [0x0119D1, 0x0119E0],
    [0x0119E4, 0x0119FF],
    [0x011A01, 0x011A0A],
    [0x011A33, 0x011A39],
    [0x011A3B, 0x011A4F],
    [0x011A51, 0x011A5B],
    [0x011A8A, 0x011A9C],
    [0x011A9E, 0x011AAF],
    [0x011AF9, 0x011BBF],
    [0x011BE1, 0x011BFF],
    [0x011C2F, 0x011C3F],
    [0x011C41, 0x011C71],
    [0x011C90, 0x011CFF],
    [0x011D31, 0x011D45],
    [0x011D47, 0x011D5F],
    [0x011D8A, 0x011D97],
    [0x011D99, 0x011EDF],
    [0x011EF3, 0x011F01],
    [0x011F34, 0x011FAF],
    [0x011FB1, 0x011FFF],
    [0x01239A, 0x01247F],
    [0x012544, 0x012F8F],
    [0x012FF1, 0x012FFF],
    [0x013430, 0x013440],
    [0x013447, 0x01345F],
    [0x0143FB, 0x0143FF],
    [0x014647, 0x0160FF],
    [0x01611E, 0x0167FF],
    [0x016A39, 0x016A3F],
    [0x016A5F, 0x016A6F],
    [0x016ABF, 0x016ACF],
    [0x016AEE, 0x016AFF],
    [0x016B30, 0x016B62],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x016D42],
    [0x016D6B, 0x016EFF],
    [0x016F4B, 0x016F4F],
    [0x016F51, 0x016FFF],
    [0x0187F8, 0x0187FF],
    [0x018CD6, 0x018CFE],
    [0x018D09, 0x01AFFF],
    [0x01B123, 0x01B131],
    [0x01B133, 0x01B14F],
    [0x01B153, 0x01B154],
    [0x01B156, 0x01B163],
    [0x01B168, 0x01B16F],
    [0x01B2FC, 0x01BBFF],
    [0x01BC6B, 0x01BC6F],
    [0x01BC7D, 0x01BC7F],
    [0x01BC89, 0x01BC8F],
    [0x01BC9A, 0x01DF09],
    [0x01DF0B, 0x01E0FF],
    [0x01E12D, 0x01E14D],
    [0x01E14F, 0x01E28F],
    [0x01E2AE, 0x01E2BF],
    [0x01E2EC, 0x01E4CF],
    [0x01E4EB, 0x01E5CF],
    [0x01E5EE, 0x01E5EF],
    [0x01E5F1, 0x01E7DF],
    [0x01E8C5, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01FFFF],
    [0x02A6E0, 0x02A6FF],
    [0x02B73A, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02EBEF],
    [0x02EE5E, 0x02F7FF],
    [0x02FA1E, 0x02FFFF],
    [0x03134B, 0x03134F],
    [0x0323B0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Other_Letter}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Other_Letter}"
);
testPropertyEscapes(
  /^\P{General_Category=Lo}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Lo}"
);
testPropertyEscapes(
  /^\P{gc=Other_Letter}+$/u,
  nonMatchSymbols,
  "\\P{gc=Other_Letter}"
);
testPropertyEscapes(
  /^\P{gc=Lo}+$/u,
  nonMatchSymbols,
  "\\P{gc=Lo}"
);
testPropertyEscapes(
  /^\P{Other_Letter}+$/u,
  nonMatchSymbols,
  "\\P{Other_Letter}"
);
testPropertyEscapes(
  /^\P{Lo}+$/u,
  nonMatchSymbols,
  "\\P{Lo}"
);
