var emojiDictionary: { [key: string]: string } = {
  a: "😘",
  "😘": "a",
  b: "😀",
  "😀": "b",
  c: "😇",
  "😇": "c",
  d: "😍",
  "😍": "d",
  e: "😒",
  "😒": "e",
  f: "😺",
  "😺": "f",
  g: "😴",
  "😴": "g",
  h: "😾",
  "😾": "h",
  i: "😲",
  "😲": "i",
  j: "😏",
  "😏": "j",
  k: "😛",
  "😛": "k",
  l: "😎",
  "😎": "l",
  m: "😳",
  "😳": "m",
  n: "😨",
  "😨": "n",
  o: "😢",
  "😢": "o",
  p: "😱",
  "😱": "p",
  q: "😣",
  "😣": "q",
  r: "😓",
  "😓": "r",
  s: "😮",
  "😮": "s",
  t: "😚",
  "😚": "t",
  u: "😜",
  "😜": "u",
  v: "😂",
  "😂": "v",
  w: "😋",
  "😋": "w",
  x: "😉",
  "😉": "x",
  y: "😁",
  "😁": "y",
  z: "😶",
  "😶": "z",
  " ": "😷",
  "😷": " ",
  ".": "😵",
  "😵": ".",
  ",": "😽",
  "😽": ",",
  "?": "😃",
  "😃": "?",
  "!": "😝",
  "😝": "!"
};

export const translate = (message: string): string => {
  let characterList = [...message.toLowerCase()];
  let translatedCharacterList: string[] = [];

  characterList.forEach(character => {
    translatedCharacterList.push(emojiDictionary[character]);
  });

  return translatedCharacterList.join("");
};

export const translateDaddys = (message: string): string =>
  [...message.toLowerCase()].reduce(
    (translation, current) => translation + (emojiDictionary[current] || ""),
    ""
  );
