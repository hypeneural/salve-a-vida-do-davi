
type Params = {
  key: string;
  name: string;
  city: string;
  amount: number;
  txid?: string;
};

const crc16 = (str: string) => {
  let crc = 0xffff;
  for (let c of str) {
    crc ^= c.charCodeAt(0) << 8;
    for (let i = 0; i < 8; i++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
};

const tag = (id: string, value: string) => `${id}${value.length.toString().padStart(2, "0")}${value}`;

export const Pix = {
  generate({ key, name, city, amount, txid = "***" }: Params) {
    name = name.substring(0, 25);
    city = city.substring(0, 15);
    txid = txid.substring(0, 25);

    const payload =
      "000201" +
      tag("01", "12") +
      tag("26", tag("00", "br.gov.bcb.pix") + tag("01", key)) +
      tag("52", "0000") +
      tag("53", "986") +
      tag("54", amount.toFixed(2)) +
      tag("58", "BR") +
      tag("59", name) +
      tag("60", city) +
      tag("62", tag("05", txid));

    const crc = crc16(payload + "6304");
    return payload + "6304" + crc;
  },
};
