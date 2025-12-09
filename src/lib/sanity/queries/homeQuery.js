export default `
*[_type == "homepage"][0]{
  title,
  "intro": introBlock,
  services
}
`;
