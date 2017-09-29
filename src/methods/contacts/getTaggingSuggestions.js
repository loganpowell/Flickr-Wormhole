import Flickr from "@/flickr"

async function getTaggingSuggestions({ apiKey = Flickr.apiKey } = {}, { page = 1, perPage = 0 } = {}) {
  return await Flickr.fetchResource(`flickr.contacts.getTaggingSuggestions`, { apiKey }, { page, perPage }, `read`)
}

export default getTaggingSuggestions
