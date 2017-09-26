import Flickr from "@/flickr"

export default async function getList(
  { apiKey = Flickr.apiKey } = {},
  { userId = ``, primaryPhotoExtras = ``, page = 0, perPage = 0 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photosets.getList`,
    { apiKey },
    { userId, primaryPhotoExtras, page, perPage }
  )
}
