import Flickr from "@/flickr"

async function getWithoutGeoData(
  { apiKey = Flickr.apiKey } = {},
  {
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    privacyFilter = 0,
    media = `all`,
    extras = ``,
    page = 1,
    perPage = 100
  } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.getWithoutGeoData`,
    { apiKey },
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, privacyFilter, media, extras, page, perPage },
    `read`
  )
}

export default getWithoutGeoData
