import axios from "axios"

export async function createScriptTag(shop, token) {
  const url = getCreateScriptTagUrl(shop);
  const headers = {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": token,
  }
  const body = {
    "script-tag": {
      "event": "onload",
      "src": "https://google.com"
    }
  }
  try {
    const result = await axios.post(url, body, headers);
    console.log("Result of fetch of create script tag URL", result);
    return result.data;
  } catch (error) {
    console.error('Error creating a new tag: ', error);
  }
}

function getBaseUrl(shop) {
  return `https://${shop}`
}

function getAllScriptTagsUrl(shop) {
  return `${getBaseUrl(shop)}/admin/api/2021-04/script_tags.json`
}

function getScriptTagUrl(shop, id) {
  return `${getBaseUrl(shop)}/admin/api/2021-04/script_tags/${id}.json`
}

function getCreateScriptTagUrl(shop) {
  return `${getBaseUrl(shop)}/admin/api/2021-04/script_tags.json`
}

function getDelelteScriptTagUrl(shop, id) {
  return `${getBaseUrl(shop)}/admin/api/2021-04/script_tags/${id}.json`
}