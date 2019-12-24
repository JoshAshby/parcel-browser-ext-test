declare module "webextension-polyfill" {
  export default browser;
}

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
