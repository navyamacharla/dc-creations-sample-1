export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  desktopImageUrl: string;
  mobileImageUrl: string;
  ctaLink: string;
  altText: string;
  sortOrder: number;
}

export interface Product_Sample {
  basePrice: number;
  categoryName: string;
  designName: string;
  fabricName: string;
  productName: string;
  styleName: string;
  weaveName: string;
  variantsJson: any;
  id: number;
}