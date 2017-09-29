import Flickr from "@/flickr"

async function getNamespaces({ apiKey = Flickr.apiKey } = {}, { predicate = ``, page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.machinetags.getNamespaces`, { apiKey }, { predicate, page, perPage })
}

export default getNamespaces
