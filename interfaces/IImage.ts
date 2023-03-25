export interface IImage {
  data: IimageData
}

export interface IimageData {
  id: number
  attributes: IimageDataAttributes
}

export interface IimageDataAttributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: IimageFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: IimageProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface IimageFormats {
  small: IimageSmall
  thumbnail: IimageSmall
}

export interface IimageSmall {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: IimageProviderMetadata
}

export interface IimageProviderMetadata {
  public_id: string
  resource_type: string
}
