import Flickr from "@/flickr"

export default async function getTopPlacesList(
  { apiKey = Flickr.apiKey, placeTypeId = `` } = {},
  { date = ``, placeId = ``, woeId = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.places.getTopPlacesList`, { apiKey, placeTypeId }, { date, placeId, woeId })
}
