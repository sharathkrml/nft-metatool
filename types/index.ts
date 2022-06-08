export default interface IMetadata {
    "name"?: string,
    "description"?: string,
    "external_url"?: string,
    "background_color"?: string,
    "image"?: string,
    "attributes"?: IAttribute[]
}
interface IAttribute {
    "display_type"?: "boost_number" | "boost_percentage" | "number",
    "trait_type"?: string,
    "value"?: string | number
}