import * as fs from "fs";
var config: any;

const frontendContractFile = "../nft_marketplace_next/constants/contract.json";

export async function initConfig() {
  config = JSON.parse(fs.readFileSync(frontendContractFile, "utf-8"));
  console.log("init");
  return config;
}

export function getConfig() {
  return config;
}

export function setConfig(path: string, val: string) {
  console.log(config);
  const splitPath = path.split(".").reverse();

  var ref = config;
  while (splitPath.length > 1) {
    let key = splitPath.pop();
    if (key) {
      if (!ref[key]) ref[key] = {};
      ref = ref[key];
    } else {
      return;
    }
  }

  let key = splitPath.pop();
  if (key) ref[key] = val;
}

export async function updateConfig() {
  console.log("write: ", JSON.stringify(config));

  return fs.writeFileSync(
    "../nft_marketplace_next/constants/contract.json",
    JSON.stringify(config, null, 2)
  );
}
